//typewriter func

const messages = [
    "<span class='highlight-blue'> Developer.</span>",
    "<span class='highlight-green'> Guitarist.</span>",
    "<span class='highlight-orange'> Graphic Designer.</span>",
    "<span class='highlight-red'> Linux Enthusiast.</span>"
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
const dynamicText = document.getElementById("dynamic-text");

function type() {
    const currentFullText = messages[messageIndex];
    
    if (isDeleting) {
        if (currentFullText.slice(charIndex - 1, charIndex) === '>') {
            charIndex = currentFullText.lastIndexOf('<', charIndex);
        } else {
            charIndex--;
        }
    } else {
        if (currentFullText.slice(charIndex, charIndex + 1) === '<') {
            charIndex = currentFullText.indexOf('>', charIndex) + 1;
        } else {
            charIndex++;
        }
    }

    dynamicText.innerHTML = currentFullText.slice(0, charIndex);

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentFullText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

type();
//scroll spy
const dotNav = document.getElementById('dotNav');
const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('section');

let hideTimeout;

function updateNavigation() {
  const scrollPos = window.scrollY;
  const firstSectionHeight = sections[0].offsetHeight;
  if (scrollPos > (firstSectionHeight - 100)) {
    
    dotNav.classList.add('visible');

    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      if (!dotNav.matches(':hover')) {
        dotNav.classList.remove('visible');
      }
    }, 2000);

  } else {
    dotNav.classList.remove('visible');
    clearTimeout(hideTimeout);
  }

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollPos >= (sectionTop - (window.innerHeight / 2))) {
      current = section.getAttribute('id');
    }
  });

  dots.forEach(dot => {
    dot.classList.remove('active');
    if (dot.getAttribute('data-target') === current) {
      dot.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNavigation);

dotNav.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    dotNav.classList.add('visible');
});

dotNav.addEventListener('mouseleave', updateNavigation);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const target = document.getElementById(dot.getAttribute('data-target'));
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  });
});

function kaydir() {
    const element = document.getElementById("box2");
    element.scrollIntoView({ behavior: "smooth", block: "center" });
}

typeWriter();
