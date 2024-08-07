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

document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.getElementById('homeLink');
  const studentsLink = document.getElementById('studentsLink');
  const classesLink = document.getElementById('classesLink');
  const mainContent = document.querySelector('.mainContent');

  function loadSection(section) {
    fetch(`dashboard/${section}.html`)
      .then(response => response.text())
      .then(html => {
        mainContent.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading section:', error);
      });
  }

  homeLink.addEventListener('click', () => {
    loadSection('home');
    homeLink.classList.add('active');
    studentsLink.classList.remove('active');
    classesLink.classList.remove('active');
  });

  studentsLink.addEventListener('click', () => {
    loadSection('students');
    homeLink.classList.remove('active');
    studentsLink.classList.add('active');
    classesLink.classList.remove('active');
  });

  classesLink.addEventListener('click', () => {
    loadSection('classes');
    homeLink.classList.remove('active');
    studentsLink.classList.remove('active');
    classesLink.classList.add('active');
  });

  loadSection('home');
});

