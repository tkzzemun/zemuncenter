
/* code is here */

//import SmoothScroll from './smoothScroll.js'
(function () {
//mobile menu logic
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let TOGGLE_MENU = false;

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');
burger.addEventListener('click', () => {
  TOGGLE_MENU = !TOGGLE_MENU
  console.log(TOGGLE_MENU )
  console.log('clicked')
  if (TOGGLE_MENU) {
    mobileMenu.classList.remove('hidden');
    header.classList.add('open-burger')
    mobileMenu.classList.add('mobile-menu-height')
    /*document.body.style.top = `-${window.scrollY}px`
    document.body.style.right = `0px`
    document.body.style.left = `0px`
    //document.body.style.position = 'fixed'*/
  }
  if (!TOGGLE_MENU) {
    mobileMenu.classList.add('hidden');
    header.classList.remove('open-burger')
    mobileMenu.classList.remove('mobile-menu-height')
    /*const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.right = ``
    document.body.style.left = ``

   window.scrollTo({top: parseInt(scrollY || '0') * -1, behavior: 'instant' })*/

  }

})

let galleryLink = document.querySelector('.gallery-link');
function closeMenu(){
  setTimeout(
    function(){
    mobileMenu.classList.add('hidden');
    header.classList.remove('open-burger')
    mobileMenu.classList.remove('mobile-menu-height')
    TOGGLE_MENU = false;
    console.log('hello')
    },
    500
  )
}

galleryLink.addEventListener('click', closeMenu)


//header animation 
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header')
  let scroll = window.scrollY;
  if (scroll > 50) {
    header.classList.add('scrolled')
  }
  else {
    header.classList.remove('scrolled')
  }
});

//update the screen height
//We get the viewport height and multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


//button to top 

if (document.body.id == 'Homepage') {
const header = document.querySelector('.header')
header.style.backgroundColor = 'white'
let toTopButton = document.querySelector(".back-to-top-button");
toTopButton.addEventListener("click", topFunction);
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
}

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

  function init() {
    new SmoothScroll({ target: document, speed: 40, smooth: 16 })
  }

  function SmoothScroll({target, speed, smooth}) {
    if (target === document)
      target = (document.scrollingElement ||
        document.documentElement ||
        document.body.parentNode ||
        document.body)
  
    let moving = false
    let pos = target.scrollTop
    let frame = target === document.body &&
      document.documentElement ?
      document.documentElement :
      target
  
    target.addEventListener('mousewheel', scrolled, {
      passive: false
    })
    target.addEventListener('DOMMouseScroll', scrolled, {
      passive: false
    })
  
    function scrolled(e) {
      e.preventDefault();
      let delta = normalizeWheelDelta(e)
  
      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight))
  
      if (!moving) update()
    }
  
    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
        else
          return -e.detail / 3 // Firefox
      } else
        return e.wheelDelta / 120 // IE,Safari,Chrome
    }
  
    function update() {
      moving = true
      let delta = (pos - target.scrollTop) / smooth
  
      target.scrollTop += delta
  
      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }
  
    let requestFrame = function () { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }

  //
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  //
  /*window.onload = () => {
    window.scrollTo(0, 0);
  }*/

  document.body.addEventListener('onload', init())
})()

