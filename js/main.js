function showLoadingAndRedirect(url) {
  const icon = document.getElementById('loading-icon');
  const sound = document.getElementById('loading-sfx');

  icon.style.display = 'block';
  sound.currentTime = 0;
  sound.play();

  document.body.classList.add('loading-fade');

  setTimeout(() => {
    window.location.href = url;
  }, 1500);
  setTimeout(stoploading,4300); 
}

document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#') && !href.startsWith('javascript')) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const clickSfx = document.getElementById('click-sfx');
      if (clickSfx) {
        clickSfx.currentTime = 0;
        clickSfx.play();
      }
      showLoadingAndRedirect(href);

    });
  }
}); 

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied Discord username to clipboard!');
  });
}
