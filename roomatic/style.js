const menu_button = document.getElementsByClassName('nav-button')[0];
const navigation = document.getElementsByClassName("nav")[0];

menu_button.addEventListener('click', function () {
    navigation.classList.toggle("nav_toggle");
});
