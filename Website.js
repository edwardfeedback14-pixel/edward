
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
    
      const fadeStart = 800;
      const fadeEnd = 1000;   
      const bg2 = document.querySelector('.background2');
      const opacity2 = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      bg2.style.opacity = opacity2;
      
      const fadeStart3 = 1800; 
      const fadeEnd3 = 2000;
      const bg3 = document.querySelector('.background3');
      const opacity3 = Math.min(Math.max((scrollY - fadeStart3) / (fadeEnd3 - fadeStart3), 0), 1);
      bg3.style.opacity = opacity3;

      const fadeStart4 = 3200; 
      const fadeEnd4 = 3400;
      const bg4 = document.querySelector('.background4');
      const opacity4 = Math.min(Math.max((scrollY - fadeStart4) / (fadeEnd4 - fadeStart4), 0), 1);
      bg4.style.opacity = opacity4;
    });


    
    const img = document.getElementById('phoneImage');
    let snd = null;
    let isPaused = false;
    let rotisseriechicken = 0;
    let animationId = null;
    function rotateShit() 
    {
      rotisseriechicken += 2;
      img.style.transform = `rotate(${rotisseriechicken}deg)`;
      animationId = requestAnimationFrame(rotateShit);
    }

    function stopRotate() 
    {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }

    img.addEventListener('click', () => {
        if (snd && !snd.paused)
        {
          snd.pause();
          isPaused = true;
          stopRotate();
        }
        else if (snd && isPaused) 
        {
          snd.play();
          isPaused = false;
          rotateShit();
        }
        else 
        {
          snd = new Audio('Sound.wav');
          snd.currentTime = 0;
          isPaused = false;
          snd.play();
          rotateShit();
          snd.addEventListener('ended', () => {
              isPaused = false;
              stopRotate();
          });
        }
    });

    const img2 = document.getElementById('game1Image');

    img2.addEventListener('click', () => {
        window.location.href = 'https://store.steampowered.com/app/3934450';
    });

    const img3 = document.getElementById('game2Image');

    img3.addEventListener('click', () => {
        window.location.href = 'https://store.steampowered.com/app/2948940';
    });
  function OpticalIllusion(Id = "vortexSpace", width = 150, height = 50, centerText = "THANKS FOR CHECKING OUT MY SITE!")
  {
    let time = 0;
    const X = width;
    const Y = height;
    const element = document.getElementById(Id);
    

    const characters = ' ciao/';

    function render()
    {
      let output = '';
      const centerY = Math.floor(Y / 2);
      const centerX = Math.floor(X / 2);
      const textStartX = centerX - Math.floor(centerText.length / 2);

      for (let y = 0; y < Y; y++)
      {
        for (let x = 0; x < X; x++)
        {
          if (y === centerY && x >= textStartX && x < textStartX + centerText.length)
          {
            output += centerText[x - textStartX];
          }
          else{
            const cx = x - X / 1;
          const cy = y - Y / 1;
          const distance = Math.sqrt(cx * cx + cy * cy);
          const angle = Math.atan2(cy, cx);
          const vortex = angle + distance * 0.3;
          const animated = vortex - time * 0.05;
          const DEEP = Math.sin(animated * 3) * 0.5 + 0.5;
          const characterIndex = Math.floor(DEEP * (characters.length - 1));
          output += characters[characterIndex];
          }
        }
        output += '\n';
      }
      element.innerHTML = output.replace(centerText, `<span class="glow-text">${centerText}</span>`);
      time += 0.5;
      requestAnimationFrame(render);
    }
    render();
  }
  OpticalIllusion("vortexSpace", 150, 50, "THANKS FOR CHECKING OUT MY SITE!");
