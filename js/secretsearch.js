function checkSecret() {
    const input = document.getElementById("secretInput");
    const keyword = input.value.toLowerCase().trim();
  
    const secretPages = {
      test: "secret-htmls/test.html",
      dsi: "secret-htmls/dsi.html",
      wii: "secret-htmls/wii.html",
      credits:"secret-htmls/credits.html",
      miiverse:"secret-htmls/miiverse.html"
    };
  
    const accessMessage = document.getElementById("accessMessage");
    const deniedMessage = document.getElementById("deniedMessage");
  
    accessMessage.style.display = "none";
    deniedMessage.style.display = "none";
    accessMessage.style.opacity = "0";
    deniedMessage.style.opacity = "0";
  
    if (secretPages[keyword]) {
      const unlockSound = new Audio("bgm/unlock.mp3");
      unlockSound.volume = 1.0;
      unlockSound.muted = false;
      unlockSound.play().catch((err) => {
        console.error("Failed to play unlock sound:", err);
      });
  
      accessMessage.style.display = "block";
      setTimeout(() => {
        accessMessage.style.opacity = "1";
      }, 50);
  
      setTimeout(() => {
        window.location.href = secretPages[keyword];
      }, 1500);
    } else {
      
      deniedMessage.style.display = "block";
      setTimeout(() => {
        deniedMessage.style.opacity = "1";
      }, 50);
  
    }
  }
  
  