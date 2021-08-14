function toggleMenu() {
    // menu-bar
    let toggle = document.querySelector('.toggle');
    toggle.classList.toggle('active');
    // navigation
    let navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    // main
    let main = document.querySelector('.main');
    main.classList.toggle('active');
}