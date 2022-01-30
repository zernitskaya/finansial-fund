var classSubMenu = 'nav__parent-link';
var links = document.getElementsByClassName(classSubMenu);
var nav = document.getElementsByClassName('nav')[0];

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
}
