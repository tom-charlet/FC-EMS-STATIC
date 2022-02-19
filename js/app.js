window.addEventListener("load", () => {

    const menuBtnHeader = document.querySelector('.header-burger-icon');
    const menuNavHeader = document.querySelector('.header-nav');

    menuBtnHeader.addEventListener('click', () => {
        menuBtnHeader.classList.toggle('is-active');
        menuNavHeader.classList.toggle('is-active');
    });

    // const btnDrop = document.querySelectorAll(".btn-drop");
    // btnDrop.forEach(element => {
    //     element.addEventListener('click', () => {
    //         let parent = element.closest('.dropdown')
    //         parent.classList.toggle('is-active');
    //     })
    // });

    const btnDrop = document.querySelectorAll(".btn-drop");
    const dropdown = document.querySelector(".dropdown").offsetHeight;
    btnDrop.forEach(element => {
        element.addEventListener('click', () => {
            let parent = element.closest('.dropdown')
            if (parent.offsetHeight === dropdown) {
                parent.style.height = `${parent.scrollHeight}px`;
            } else {
                parent.style.height = `${dropdown}px`;
            }
        })
    });
});