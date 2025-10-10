

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const fadeStart = 200;
        const fadeEnd = 800;   

        const bg2 = document.querySelector('.background2');

        const opacity = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
        bg2.style.opacity = opacity;
    });

    const img = document.getElementById('phoneImage');

    img.addEventListener('click', () => {
    const snd = new Audio('Sound.wav');
    snd.currentTime = 0;
    snd.play();
    });