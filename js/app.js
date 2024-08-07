document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
});
