const sidebar = document.querySelector('.sidebar');

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mouseover', function(e) {
    if (e.clientX <= 10) {
      sidebar.classList.add('active');
    }
  });

  document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0) {
      sidebar.classList.remove('active');
    }
  });

  sidebar.addEventListener('mouseleave', function() {
    sidebar.classList.remove('active');
  });
});
