/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__Link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass == 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    on: {
        init: function () {
            document.querySelector('.portfolio__container').style.visibility = 'visible';
        }
    }
});




/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,                  // Enables infinite loop
    grabCursor: true,            // Shows the grab icon
    spaceBetween: 48,            // Space between slides

    autoplay: {
        delay: 4000,             // Auto slide every 4 seconds
        disableOnInteraction: false, // Autoplay continues even after user interaction
    },

    pagination: {
        el: '.swiper-pagination-testimonial', // Pagination element
        clickable: true,          // Pagination bullets are clickable
        dynamicBullets: true,     // Enables dynamic bullets
    },

    simulateTouch: true,           // Allow drag/swipe interactions
    touchRatio: 1,                 // Normal sensitivity for dragging
    touchAngle: 45,                // Angle tolerance for swipe (default is 45)
    slidesPerView: 1,              // One slide at a time
    speed: 500,                    // Transition speed between slides (500ms)

    mousewheel: {
        invert: false,            // Allow normal wheel scrolling behavior
    },
});


/*==================== CONTACT ME  ====================*/

function sendMessage() {
    let name = document.querySelector('.name').value;
    let subject = document.querySelector('.subject').value;
    let message = document.querySelector('.message').value;


    var body =  encodeURIComponent(name) + "%0D%0A" +
        "Message: " + encodeURIComponent(message);
    window.location.href = `mailto:alanmjoshy22012001@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrolly = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);



/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
    const nav = document.getElementById('header')


    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

}

window.addEventListener('scroll', scrollHeader);


/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
    const scrollUpButton = document.getElementById('scroll-up');
    if (window.scrollY > 560) {
        scrollUpButton.classList.add('show-scroll');
    } else {
        scrollUpButton.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);



/*==================== DARK LIGHT THEME ====================*/


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected theme (if the user selected one)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Function to get the current theme by validating the `dark-theme` class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Validate if the user previously chose a theme
if (selectedTheme) {
    // If a theme was previously selected, apply the corresponding theme and icon
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Manually activate/deactivate the theme with the button
themeButton.addEventListener('click', () => {
    // Toggle the dark theme and icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});





const texts = ["Front-End Developer", "Web Developer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0; // Loop back to the first text
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // Pause for 2 seconds before changing text
  } else {
    setTimeout(type, 100); // Adjust typing speed here
  }
})();



