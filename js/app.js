document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');
  const chart = document.querySelector('.chart');
  const data = [10, 20, 30, 40, 50, 60, 70];
  const maxValue = Math.max(...data);
  const homeLink = document.getElementById('homeLink');
  const studentsLink = document.getElementById('studentsLink');
  const classesLink = document.getElementById('classesLink');
  const mainContent = document.querySelector('.mainContent');

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  function loadSection(section) {
    fetch(`dashboard/${section}.html`)
      .then(response => response.text())
      .then(html => {
        mainContent.innerHTML = html;
        const newChart = document.querySelector('.chart');
        if (newChart) {
          newChart.innerHTML = '';
          data.forEach(value => {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            const barHeight = (value / maxValue) * 300;
            bar.style.height = `${barHeight}px`;
            const label = document.createElement('span');
            label.textContent = value.toString();
            bar.appendChild(label);
            newChart.appendChild(bar);
          });
        }
        if (section === 'home') {
          fetchTestData();
        }
      })
      .catch(error => {
        console.error('Error loading section:', error);
      });
  }

  function fetchTestData() {
    fetch('https://dummyjson.com/test')
      .then(response => response.json())
      .then(data => {
        console.log('Data from API:', data);
        updateCard(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  function updateCard(data) {
    const card = document.querySelector('.card-container .card:nth-child(2)');
    if (card) {
      card.innerHTML = `${data.method}`;
    }
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
