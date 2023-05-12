
/* code is here */

/*import SmoothScroll from './smoothScroll.js'*/

(function () {

/*function init() {
    new SmoothScroll({ target: document, speed: 40, smooth: 16 })
  }*/

//mobile menu logic
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let TOGGLE_MENU = false;

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');
burger.addEventListener('click', () => {
  TOGGLE_MENU = !TOGGLE_MENU
  if (TOGGLE_MENU) {
    console.log('i clicked')
    mobileMenu.classList.remove('hidden');
    header.classList.add('open-burger')
    /*header.classList.add('black');*/
    mobileMenu.classList.add('mobile-menu-height')
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.right = `0px`
    document.body.style.left = `0px`
    document.body.style.position = 'fixed'
  }
  if (!TOGGLE_MENU) {
    mobileMenu.classList.add('hidden');
    header.classList.remove('open-burger')
    mobileMenu.classList.remove('mobile-menu-height')
    /*header.classList.remove('black')*/
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.right = ``
    document.body.style.left = ``

    window.scrollTo({top: parseInt(scrollY || '0') * -1, behavior: 'instant' })

  }

})


//animation on scroll


if (document.querySelector('.reveal')) {
    ScrollReveal().reveal('.reveal', {
      distance: '150px',
      duration: 1300,
      origin: 'bottom',
      easing: 'cubic-bezier(.17,1.05,.88,1)'
    });
  }
  if (document.querySelector('.reveal-delay-200')) {
    ScrollReveal().reveal('.reveal-delay-200', {
      delay: 200,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-delay-300')) {
    ScrollReveal().reveal('.reveal-delay-300', {
      delay: 300,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-delay-400')) {
    ScrollReveal().reveal('.reveal-delay-400', {
      delay: 400,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-delay-500')) {
    ScrollReveal().reveal('.reveal-delay-500', {
      delay: 500,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-delay-600')) {
    ScrollReveal().reveal('.reveal-delay-600', {
      delay: 600,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-delay-700')) {
    ScrollReveal().reveal('.reveal-delay-700', {
      delay: 700,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-left')) {
    ScrollReveal().reveal('.reveal-left', {
      distance: '150px',
      origin: 'left',
      opacity: 0,
      delay: 150,
      duration: 1100,
      easing: 'ease-in-out'
    })
  }
  if (document.querySelector('.reveal-right')) {
    ScrollReveal().reveal('.reveal-right', {
      distance: '150px',
      origin: 'right',
      opacity: 0,
      delay: 150,
      duration: 1100,
      easing: 'ease-in-out'
    })
  }

  if (window.innerWidth < 450) {
    if (document.querySelector('.reveal')) {
      ScrollReveal().reveal('.reveal', {
        distance: '80px',
        duration: 1100,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-200')) {
      ScrollReveal().reveal('.reveal-delay-200', {
        delay: 130,
        distance: '120px',
        duration: 1100,
        origin: 'bottom',
        easing: 'cubic-bezier(0.3,1.05,1,1)'
      });
    }
    if (document.querySelector('.reveal-delay-300')) {
      ScrollReveal().reveal('.reveal-delay-300', {
        delay: 200,
        distance: '80px',
        duration: 1200,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-400')) {
      ScrollReveal().reveal('.reveal-delay-400', {
        delay: 230,
        distance: '120px',
        duration: 1100,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-500')) {
      ScrollReveal().reveal('.reveal-delay-500', {
        delay: 360,
        distance: '80px',
        duration: 1100,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-600')) {
      ScrollReveal().reveal('.reveal-delay-600', {
        delay: 400,
        distance: '80px',
        duration: 1200,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-700')) {
      ScrollReveal().reveal('.reveal-delay-700', {
        delay: 430,
        distance: '80px',
        duration: 1200,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-4000')) {
      ScrollReveal().reveal('.reveal-delay-4000', {
        delay: 130,
        distance: '80px',
        duration: 1200,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-left')) {
      ScrollReveal().reveal('.reveal-left', {
        distance: '80px',
        origin: 'bottom',
        opacity: 0,
        duration: 1100,
        easing: 'ease-in-out'
      })
    }
    if (document.querySelector('.reveal-right')) {
      ScrollReveal().reveal('.reveal-right', {
        distance: '80px',
        origin: 'bottom',
        opacity: 0,
        duration: 1100,
        easing: 'ease-in-out'
      })
    }
  }

})()

