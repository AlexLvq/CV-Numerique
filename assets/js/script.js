// NavBar apparait --------------------------------------------------
$(function () {
    $('#nav1').hide();
});
$(page).scroll(function () {
    posScroll = $(page).scrollTop();
    if (posScroll >= 550 && posScroll <= 3600)
        $('#nav1').slideDown(500);
    else
        $('#nav1').slideUp(500);
});





// Replace img --------------------------------------------------
firstimg.addEventListener('mouseenter', function () {
    this.src = 'assets/img/moichemise.png';
}, false);
firstimg.addEventListener('mouseleave', function () {
    this.src = 'assets/img/nbmoichemise.png';
}, false);






// ProgressBar --------------------------------------------------
var cinquante = document.querySelectorAll('.animate');
var cinq = document.querySelectorAll('.animates');

page.addEventListener('scroll', function () {
    if (page.scrollTop >= 2400) {
        cinquante.forEach(function (a) {
            a.classList.add('progress1');
        })
        cinq.forEach(function (b) {
            b.classList.add('progress');
        })
    }
})






// ScrollAppearDisappear Profil --------------------------------------------------
var appearProfil = document.querySelectorAll('.appear');

page.addEventListener('scroll', function () {
    if (page.scrollTop > 356 && page.scrollTop < 920) {
        var delay = 0;
        appearProfil.forEach(function (element) {
            element.style.opacity = 1;
            element.style.transition = 'opacity 1s ' + delay + 's';
            delay += 0.5;
        });
    } else if (page.scrollTop < 356 || page.scrollTop > 920) {
        appearProfil.forEach(element => {
            element.style.opacity = 0;
        });
    }
})




// ScrollAppearDisappear Experiences --------------------------------------------------
var appearExp = document.querySelectorAll('.appearun');

page.addEventListener('scroll', function () {
    if (page.scrollTop > 920 && page.scrollTop < 1515) {
        var delay = 0;
        appearExp.forEach(function (element) {
            element.style.opacity = 1;
            element.style.transition = 'opacity 1s ' + delay + 's';
            delay += 0.5;
        });
    } else if (page.scrollTop < 920 || page.scrollTop > 1515) {
        appearExp.forEach(element => {
            element.style.opacity = 0;
        });
    }
})





// ScrollAppearDisappear Formations --------------------------------------------------
var appearForm = document.querySelectorAll('.appeardeux');

page.addEventListener('scroll', function () {
    if (page.scrollTop > 1515 && page.scrollTop < 2080) {
        var delay = 0;
        appearForm.forEach(function (element) {
            element.style.opacity = 1;
            element.style.transition = 'opacity 1s ' + delay + 's';
            delay += 0.5;
        });
    } else if (page.scrollTop < 1515 || page.scrollTop > 2080) {
        appearForm.forEach(element => {
            element.style.opacity = 0;
        });
    }
})




// ScrollAppearDisappear Compétences --------------------------------------------------
var appearComp = document.querySelectorAll('.appeartrois');

page.addEventListener('scroll', function () {
    if (page.scrollTop > 2080 && page.scrollTop < 2660) {
        var delay = 0;
        appearComp.forEach(function (element) {
            element.style.opacity = 1;
            element.style.transition = 'opacity 1s ' + delay + 's';
            delay += 0.5;
        });
    } else if (page.scrollTop < 2080 || page.scrollTop > 2660) {
        appearComp.forEach(element => {
            element.style.opacity = 0;
        });
    }
})




// ScrollAppearDisappear Loisirs --------------------------------------------------


var appearLoisir = document.querySelectorAll('.appearquatre');

page.addEventListener('scroll', function () {
    if (page.scrollTop > 2660 && page.scrollTop < 3300) {
        var delay = 0;
        appearLoisir.forEach(function (element) {
            element.style.opacity = 1;
            element.style.transition = 'opacity 1s ' + delay + 's';
            delay += 0.5;
        });
    } else if (page.scrollTop < 2660 || page.scrollTop > 3300) {
        appearLoisir.forEach(element => {
            element.style.opacity = 0;
        });
    }
})