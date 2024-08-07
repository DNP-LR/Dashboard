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
  const homeSection = document.getElementById('homeSection');
  const studentsSection = document.getElementById('studentsSection');
  const classesSection = document.getElementById('classesSection');

  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    const links = document.querySelectorAll('.sidebar ul li');
    links.forEach(link => {
      link.classList.remove('active');
    });
    document.getElementById(sectionId.replace('Section', 'Link')).classList.add('active');
  }

  homeLink.addEventListener('click', () => {
    showSection('homeSection');
  });

  studentsLink.addEventListener('click', () => {
    showSection('studentsSection');
  });

  classesLink.addEventListener('click', () => {
    showSection('classesSection');
  });
});


