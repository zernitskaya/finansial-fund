var classSubMenu = 'nav__parent-link';
var links = document.getElementsByClassName(classSubMenu);
var nav = document.getElementsByClassName('nav')[0];
var openMenu = document.getElementsByClassName('open-menu')[0];
var header = document.getElementsByClassName('header')[0];

if (nav) {
  nav.addEventListener('click', function(e) {
    console.log(e.target)
    if (e.target.classList.contains(classSubMenu)) {
      for (var i = 0; i < links.length; i++) {
        if (links[i] != e.target) {
          links[i].parentElement.classList.remove('active');
        }
      }

      setTimeout(function() {
        e.target.parentElement.classList.toggle('active');
      }, 100)
    }
  });

  openMenu.addEventListener('click', function(e) {
    header.classList.toggle('active');
  });
}

function scrollTo(to, duration = 700) {
  const
      element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      },
      animateScroll = function () {
          const currentDate = +new Date();
          const currentTime = currentDate - startDate;
          element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
          if (currentTime < duration) {
              requestAnimationFrame(animateScroll);
          }
          else {
              element.scrollTop = to;
          }
      };
  animateScroll();
}

let btnTop = document.querySelector('#toTop');
let banBot = document.querySelector('#banBot');

if (btnTop) {
  btnTop.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 400);
  }
}

if (banBot) {
  banBot.onclick = function (click) {
    click.preventDefault();
    scrollTo(banBot.parentElement.parentElement.clientHeight + header.clientHeight, 400);
  }
}
