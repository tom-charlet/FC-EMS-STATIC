window.addEventListener("load", () => {

    // MENU MOBILE

    const menuBtnHeader = document.querySelector('.header-burger-icon');
    const menuNavHeader = document.querySelector('.header-nav');

    menuBtnHeader.addEventListener('click', () => {
        menuBtnHeader.classList.toggle('is-active');
        menuNavHeader.classList.toggle('is-active');
    });

    // DROPDOWN MENU

    const DropBtn = document.querySelectorAll('.dropdown-menu');
    DropBtn.forEach(menu => {
        menu.addEventListener('click', () => {
            dropdown = menu.childNodes[3];
            dropdown.classList.toggle('is-active');
        });
        menu.addEventListener('mouseleave', () => {
            dropdown = menu.childNodes[3];
            dropdown.classList.remove('is-active');
        });
    });





    // RESULTATS MATCHS

    var match1 = {
        mois: 'OCTOBRE',
        teamName1: 'Equipe 1',
        teamLogo1: '../img/logo-ems.png',
        score: '1 - 3',
        teamName2: 'Equipe 2',
        teamLogo2: '../img/logo-ems.png',
        desc: 'MATCHS TEST - 12 OCOTBRE 2022 - 8H50 - ELBEUF'
    };
    console.log(match1);
    var match2 = {
        mois: 'NOVEMBRE',
        teamName1: 'Equipe 1 autre',
        teamLogo1: '../img/logo-ems.png',
        score: ' - ',
        teamName2: 'Equipe 2 autre',
        teamLogo2: '../img/logo-ems.png',
        desc: 'TEST TEST - 2 NOVEMBRE 2023 - 18H20 - ROUEN'
    };

    var mois = document.querySelector('.carousel-info');

    console.log(mois.textContent);
    mois = match1.mois;
    console.log(mois);
    mois.innerHTML(match1.mois);

    document.querySelector('.btn-next').addEventListener('click', () => {
        mois.innerHTML("<h3 class='carousel-info'>" + match1.mois + "</h3>");
        console.log(match1.mois);
    });





    // POPUP IMAGES

    document.querySelectorAll('.galerie-photo-items img').forEach(image => {
        image.addEventListener('click', () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        });
    });
    document.querySelector('.popup-image-close').addEventListener('click', () => {
        document.querySelector('.popup-image').style.display = 'none';
    });
});