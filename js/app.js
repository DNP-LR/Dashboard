document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const chart = document.querySelector('.chart');
  const data = [10, 20, 30, 40, 50, 60, 70];
  const maxValue = Math.max(...data);

  data.forEach(value => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    const barHeight = (value / maxValue) * 300;
    bar.style.height = `${barHeight}px`;
    const label = document.createElement('span');
    label.textContent = value.toString();
    bar.appendChild(label);
    chart.appendChild(bar);
  });
});

