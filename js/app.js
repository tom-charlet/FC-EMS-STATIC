window.addEventListener("load", () => {

    const menuBtnHeader = document.querySelector('.header-burger-icon');
    const menuNavHeader = document.querySelector('.header-nav');

    menuBtnHeader.addEventListener('click', () => {
        menuBtnHeader.classList.toggle('is-active');
        menuNavHeader.classList.toggle('is-active');
    });

    const dropdown = document.querySelector(".dropdown");
    const btnDrop = document.querySelector(".btn-drop");

    let toggleIndex = 0;

    btnDrop.addEventListener('click', () => {

        // console.log(dropdown.scrollHeight);

        if (toggleIndex === 0) {
            dropdown.style.height = `${dropdown.scrollHeight}px`;
            toggleIndex++;
        } else {
            dropdown.style.height = `${btnDrop.scrollHeight}px`;
            toggleIndex--;
        }

    })
});