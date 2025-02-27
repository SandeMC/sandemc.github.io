document.addEventListener('DOMContentLoaded', function() {
  // Info toggles for all toggle elements
  const infoToggles = document.querySelectorAll('.info-toggle');
  
  infoToggles.forEach(toggle => {
    toggle.addEventListener('click', function(event) {
      // Prevent event from bubbling up
      event.stopPropagation();
      
      // Close any open toggles
      infoToggles.forEach(item => {
        if (item !== this) {
          item.classList.remove('active');
        }
      });
      
      // Toggle current item
      this.classList.toggle('active');
    });
  });
  
  // Close info when clicking elsewhere
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.info-toggle')) {
      infoToggles.forEach(item => {
        item.classList.remove('active');
      });
    }
  });
  
  // Close tooltips with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      infoToggles.forEach(item => {
        item.classList.remove('active');
      });
    }
  });
  
  // Make Discord status widget "pop" on hover
  const discordLink = document.querySelector('.discord-link');
  if (discordLink) {
    discordLink.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    discordLink.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  }
  
  // Function to adjust for different screen sizes
  function adjustForScreenSize() {
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;
    
    // Adjust bio boxes for mobile
    const bioBoxes = document.querySelectorAll('.bio-box');
    
    // Adjust Discord widget for small screens
    const discordStatus = document.querySelector('.discord-status');
    if (discordStatus) {
      if (isSmallMobile) {
        discordStatus.style.width = '100%';
        discordStatus.style.maxWidth = '350px';
      } else {
        discordStatus.style.width = 'auto';
        discordStatus.style.maxWidth = 'none';
      }
    }
    
    // Adjust buttons for mobile
    const buttons = document.querySelectorAll('.social-button');
    if (isMobile) {
      buttons.forEach(button => {
        button.style.width = '100%';
      });
    } else {
      buttons.forEach(button => {
        button.style.width = 'auto';
      });
    }
  }
  
  // Run adjustments on load
  adjustForScreenSize();
  
  // Run adjustments on window resize
  window.addEventListener('resize', adjustForScreenSize);
});