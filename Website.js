
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
    snd.currentTime =
     0;
    snd.play();
    });

    const img2 = document.getElementById('game1Image');

    img2.addEventListener('click', () => {
        window.location.href = 'https://store.steampowered.com/app/3934450';
    });

    const img3 = document.getElementById('game2Image');

    img3.addEventListener('click', () => {
        window.location.href = 'https://store.steampowered.com/app/2948940';
    });


    function sumBullshit() {
    const zone = document.querySelector('#zone');
    const fps = [
        `








                    EEEEE  DDDD    W       W      A      RRRR    DDDD
                    E      D   D   W       W     A A     R  RR   D   D
                    EEEE   D    D   W  W  W     A   A    RRR     D    D
                    E      D   D    W W W W    AAAAAAA   R  R    D   D
                    EEEEE  DDDD      W   W    A       A  R   R   DDDD     `,
        `








                    eeeee  dddd    w       w      a      rrrr    dddd
                    e      d   d   w       w     a a     r  rr   d   d
                    eeee   d    d   w  w  w     a   a    rrr     d    d
                    e      d   d    w w w w    aaaaaaa   r  r    d   d
                    eeeee  dddd      w   w    a       a  r   r   dddd     `,

        `








                    11111  2222    3       3      4      5555    6666
                    1      2   2   3       3     4 4     5  55   6   6
                    1111   2    2   3  3  3     4   4    555     6    6
                    1      2   2    3 3 3 3    4444444   5  5    6   6
                    11111  2222      3   3    4       4  5   5   6666     `,
        `




        



                    .....  ////    !       !      |      ???     ~~~~
                    .      /   /   !       !     | |     ?  ??   ~   ~
                    ....   /    /   !  !  !     |   |    ???     ~    ~
                    .      /   /    ! ! ! !    |||||||   ?  ?    ~   ~
                    .....  ////      !   !    |       |  ?   ?   ~~~~     
        `
    ];
    let i = 0;
    setInterval(() => {
        zone.textContent = `${fps[i % fps.length]}`;
        i++;
    }, 100);
}
sumBullshit();
