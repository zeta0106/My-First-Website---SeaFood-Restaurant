
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Parallax 1
    var parallax1 = document.getElementById('parallax1');
    parallax1.style.backgroundPositionY = scrollTop * 0.5 + 'px'; // Adjust the parallax speed as needed
    
    // Parallax 2
    var parallax2 = document.getElementById('parallax2');
    parallax2.style.backgroundPositionY = scrollTop * 0.8 + 'px'; // Adjust the parallax speed as needed
  });
