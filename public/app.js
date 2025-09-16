async function addEntry() {
  const workout = document.getElementById('workout').value;
  const calories = document.getElementById('calories').value;

  if (!workout || !calories) return alert("Please enter values");

  // Send to backend
  const response = await fetch('/api/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ workout, calories })
  });

  const data = await response.json();
  console.log("Saved:", data);

  loadHistory(); // refresh list
  document.getElementById('workout').value = "";
  document.getElementById('calories').value = "";
}

async function loadHistory() {
  const response = await fetch('/api/history');
  const history = await response.json();

  const list = document.getElementById('history');
  list.innerHTML = "";

  history.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `Workout: ${entry.workout} mins, Calories: ${entry.calories}`;
    list.appendChild(li);
  });
}

// Load history on page load
window.onload = loadHistory;