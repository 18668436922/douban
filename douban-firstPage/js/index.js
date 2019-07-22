var appQR = document.getElementsByClassName('app-qr')[0];
var qrShow = document.getElementsByClassName('qr-show')[0];
appQR.onmouseover = function () {
    qrShow.style.display = 'block';
}
appQR.onmouseout = function () {
    qrShow.style.display = 'none';
}

var sidePic = document.getElementsByClassName('side-pic');
var iconBg = document.getElementsByClassName('icon-bg');
for (var i = 0; i < sidePic.length; i++) {
    (function (i) {
        sidePic[i].onmouseover = function () {
            iconBg[i].style.display = 'block';
        }
        sidePic[i].onmouseout = function () {
            iconBg[i].style.display = 'none';
        }
    })(i)
}