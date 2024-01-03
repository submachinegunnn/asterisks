const sidebar = document.querySelector('.sidebar');

document.addEventListener('DOMContentLoaded', () => {
  // Event listener for when mouse enters the left edge of the page
  document.addEventListener('mouseover', function(e) {
    if (e.clientX <= 10) { // Change the threshold value as needed
      sidebar.classList.add('active');
    }
  });

  // Event listener for when mouse leaves the sidebar
  sidebar.addEventListener('mouseleave', function() {
    sidebar.classList.remove('active');
  });
});
