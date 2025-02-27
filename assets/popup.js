document.addEventListener('DOMContentLoaded', function() {
  const infoToggles = document.querySelectorAll('.info-toggle');
  
  // Create tooltip elements for each toggle
  infoToggles.forEach(toggle => {
    const tooltip = document.createElement('div');
    tooltip.className = 'info-tooltip';
    tooltip.textContent = toggle.dataset.info;
    toggle.appendChild(tooltip);
  });

  infoToggles.forEach(toggle => {
    toggle.addEventListener('click', function(event) {
      event.stopPropagation();
      
      // Close any other active toggles
      infoToggles.forEach(item => {
        if (item !== this) item.classList.remove('active', 'downwards');
      });
      
      // Toggle active state
      this.classList.toggle('active');
      
      if (this.classList.contains('active')) {
        const tooltip = this.querySelector('.info-tooltip');
        // Force reflow so that tooltip dimensions are up to date
        void tooltip.offsetWidth;
        
        const toggleRect = this.getBoundingClientRect();
        const tooltipHeight = tooltip.offsetHeight;
        const spaceAbove = toggleRect.top;
        const spaceBelow = window.innerHeight - toggleRect.bottom;

        // If there isn’t enough space above but enough below, display downwards
        if (spaceAbove < tooltipHeight + 10 && spaceBelow >= tooltipHeight + 10) {
          this.classList.add('downwards');
        } else {
          this.classList.remove('downwards');
        }
      }
    });
  });
  
  // Close tooltips when clicking outside or pressing Escape
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.info-toggle')) {
      infoToggles.forEach(item => {
        item.classList.remove('active', 'downwards');
      });
    }
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      infoToggles.forEach(item => {
        item.classList.remove('active', 'downwards');
      });
    }
  });
  
  // Discord widget hover effect
  const discordLink = document.querySelector('.discord-link');
  if (discordLink) {
    discordLink.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    discordLink.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  }
  
  // Adjust layout for different screen sizes
  function adjustForScreenSize() {
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;
    
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
    
    // Adjust social buttons for mobile
    const buttons = document.querySelectorAll('.social-button');
    buttons.forEach(button => {
      button.style.width = isMobile ? '100%' : 'auto';
    });
  }
  
  adjustForScreenSize();
  window.addEventListener('resize', adjustForScreenSize);
});
