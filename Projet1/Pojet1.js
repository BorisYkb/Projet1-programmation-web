let menu = document.querySelector('#menu');
let listnav = document.querySelector('.listnav');

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  listnav.classList.toggle('active')
};

window.onscroll = () => {
  menu.classList.remove('bx-x')
  listnav.classList.remove('active')
};

const sr = ScrollReveal ({
  distance: '40px',
  duration: 2600,
  reset: true
})


sr.reveal('.acroche,.section1,.section2,.section3,.section4,.copyright,.footer,.sectionG1,.pre,.contenu1,.sectionG1-h1,.texte-acroche,.touch-acroche', {delay:300, origin:'left'})