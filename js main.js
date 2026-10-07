// If on profile page, load worker data
const workerName = document.getElementById('worker-name');

if (workerName) {
  // Get worker ID from URL (?id=1)
  const params = new URLSearchParams(window.location.search);
  const workerId = parseInt(params.get('id')) || 1;

  fetch('data/workers.json')
    .then(res => res.json())
    .then(workers => {
      const worker = workers.find(w => w.id === workerId);
      if (!worker) return;

      document.getElementById('worker-name').textContent = worker.name;
      document.getElementById('worker-trade').textContent = worker.trade;
      document.getElementById('worker-location').textContent = worker.location;
      document.getElementById('worker-rating').textContent = worker.rating;
      document.getElementById('worker-bio').textContent = worker.bio;
      document.getElementById('worker-phone').textContent = worker.phone;
      document.getElementById('worker-email').textContent = worker.email;

      const skillsList = document.getElementById('worker-skills');
      worker.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
      });
    });
}
