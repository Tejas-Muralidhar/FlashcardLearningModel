// *************************************************************
// JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.getElementById('about-button');
    const pageInfo = document.getElementById('page-info');
  
    // Function to show the 'page-info' div
    function showPageInfo() {
      pageInfo.style.display = 'flex';
    }
  
    // Function to hide the 'page-info' div
    function hidePageInfo() {
      pageInfo.style.display = 'none';
    }
  
    // Show 'page-info' on button click
    aboutButton.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent this click event from propagating to document
      showPageInfo();
    });
  
    // Hide 'page-info' on click outside
    document.addEventListener('click', function (event) {
      if (event.target !== pageInfo && event.target !== aboutButton) {
        hidePageInfo();
      }
    });
  
    // Stop propagation of clicks inside the 'page-info' div
    pageInfo.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });
  