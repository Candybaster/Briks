const headerBurger = document.querySelector('.header-burger');
const headerNav = document.querySelector('#nav2');
const closeMobMenu = document.querySelector('.close_mob_menu');

headerBurger.addEventListener('click', function () {
  headerNav.classList.add("mobile_menu_active");
});

closeMobMenu.addEventListener('click', function () {
  headerNav.classList.remove("mobile_menu_active");
});
