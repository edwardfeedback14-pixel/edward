
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

        EEEEEEEEE
E
      EEEEEEE
E
        EEEEEEEEE

    DDDDD
      D    DD
        D      DD
      D    DD
    DDDDD

    W       W
    W       W
     W  W  W
     W W W W
      W   W

        A
       A A
      A   A
     AAAAAAA
    A       A

    RRRRRRR
      R      RR
    RRRRRRR
     R      R
      R       R

    DDDDD
      D    DD
        D      DD
      D    DD
    DDDDD

    `,
    `

        eeeeeeeee
e
      eeeeeee
e
        eeeeeeeee

    ddddd
      d    dd
        d      dd
      d    dd
    ddddd

    w       w
    w       w
     w  w  w
     w w w w
      w   w

        a
       a a
      a   a
     aaaaaaa
    a       a

    rrrrrrr
      r      rr
    rrrrrrr
     r      r
      r       r

    ddddd
      d    dd
        d      dd
      d    dd
    ddddd

    `,
    `

        111111111
1
      1111111
1
        111111111

    22222
      2    22
        2      22
      2    22
    22222

    3       3
    3       3
     3  3  3
     3 3 3 3
      3   3

        4
       4 4
      4   4
     4444444
    4       4

    5555555
      5      55
    5555555
     5      5
      5       5

    66666
      6    66
        6      66
      6    66
    66666

    `,
    `

        .........
.
      .......
.
        .........

    /////
      /    //
        /      //
      /    //
    /////

    !       !
    !       !
     !  !  !
     ! ! ! !
      !   !

        |
       | |
      |   |
     |||||||
    |       |

    ??????
      ?     ??
    ??????
     ?     ?
      ?      ?

    ~~~~~
      ~    ~~
        ~      ~~
      ~    ~~
    ~~~~~

    `
    ];

    let i = 0;
    setInterval(() => {
        zone.textContent = `${fps[i % fps.length]}`;
        i++;
    }, 100);
}
sumBullshit();

