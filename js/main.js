function showLoadingAndRedirect(url) {
    const icon = document.getElementById('loading-icon');
    const sound = document.getElementById('loading-sfx');
  
    icon.style.display = 'block';
    sound.currentTime = 0;
    sound.play();
  
    // white screen fade :tro:
    document.body.classList.add('loading-fade');
  
    setTimeout(() => {
      window.location.href = url;
    }, 1500); // 1.5 second delay!
  }

  document.addEventListener('click', () => {
    const clickSound = document.getElementById('click-sfx');
    if (clickSound) {
      clickSound.currentTime = 0; 
      clickSound.play().catch(e => console.error('Click sound error:', e));
    } else {
      console.log('click-sfx not found');
    }
  });
  
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('javascript')) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        showLoadingAndRedirect(href);
      });
    }
  });
  