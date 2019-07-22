var phoneAccount = document.getElementsByClassName('phone-account')[0];
var passwordAccount = document.getElementsByClassName('password-account')[0];
var phonePage = document.getElementsByClassName('phone')[0];
var passwordPage = document.getElementsByClassName('password')[0];

phoneAccount.onclick = function () {
    phoneAccount.className = 'click-login';
    passwordAccount.className = 'password-account';
    phonePage.style.display = 'block';
    passwordPage.style.display = 'none';
}
passwordAccount.onclick = function () {
    passwordAccount.classList = 'click-login';
    phoneAccount.className = 'phone-account';
    passwordPage.style.display = 'block';
    phonePage.style.display = 'none';
}
var myQR = document.getElementsByClassName('toggleQR')[0];
var mySwitch = document.getElementsByClassName('switch')[0];
var QRcode = document.getElementsByClassName('QR-code')[0];
var QRimg = document.getElementsByClassName('QR-img')[0];
myQR.onclick = function () {
    if (mySwitch.style.display !== 'none') {
        mySwitch.style.display = 'none';
        QRcode.style.display = 'block';
        myQR.style.background = 'url(img/input.png) no-repeat';
        myQR.style.backgroundSize = '100% 100%'
    } else {
        mySwitch.style.display = 'block';
        QRcode.style.display = 'none';
        myQR.style.background = 'url(img/scan.png) no-repeat';
        myQR.style.backgroundSize = '100% 100%'
    }
}