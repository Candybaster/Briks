const headerLogo = document.getElementById('header-logo-img');
const footerLogo = document.getElementById('footer-logo-img');
let widthMonitor = document.body.clientWidth;

if ((widthMonitor > 991) && (1365 >= widthMonitor)) {
  headerLogo.src = 'img/header-logo-middle.png';
}
if ((widthMonitor > 1199) && (1365 >= widthMonitor)) {
  footerLogo.src = 'img/footer-logo-middle.png';
}
if (widthMonitor > 1365) {
  headerLogo.src = 'img/bricks-logo.png';
  footerLogo.src = 'img/footer-logo.png';
}