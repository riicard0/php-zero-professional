//
AOS.init({
    offset: 150,
    duration: 1250,
    once: true,
});

// Sidebar Menu
function openNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '0';
    } else {
        console.error('error: side panel not found');
    }
}

function closeNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '-320px';
    } else {
        console.error('error: side panel not found');
    }
}

// Search Bar
function open_search(){
    'use strict';
    const searchpanel = document.getElementById('search_bar');

    if(searchpanel){
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';
    } else {
        console.error('error: search panel not found');
    }
}

function close_search(){
    'use strict';
    const searchpanel = document.getElementById('search_bar');
    if(searchpanel){
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRightRadius = '100%';
    } else {
        console.error('error: search panel not found');
    }
}

// Right Sidebar
function open_rightSidebar(){
    'use strict';
    const rightSidebar = document.getElementById('right_sidebar');
    if(rightSidebar){
        rightSidebar.style.right = '0';
    } else {
        console.error('error: right sidebar not found');
    }
}

function close_rightSidebar(){
    'use strict';
    const rightSidebar = document.getElementById('right_sidebar');
    if(rightSidebar){
        rightSidebar.style.right = '-355px';
    } else {
        console.error('error: right sidebar not found');
    }
}

// Responsive LogoIpsum Slider
$('.sliderlogo').slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,

        }
    },
    ]
});

// Portfolio/Gallery
function open_img(evt, cityName){
    let i, tabcontent, tablinks;

    // hide all tab content
    tabcontent = document.getElementsByClassName('tab-content');
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    // remove active class from all tab links
    tablinks = document.getElementsByClassName('tablinks');
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove("active");
    }

    // show the selected tab content and mark the corresponding tab link as active
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add('active');
}

// Slider - Team Section
$('.team-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive:[{
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 630,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        }
    }
]
});

// Accordion FAQ
document.addEventListener('DOMContentLoaded', function() {
    let accordionButtons = document.querySelectorAll('.accordion-button');
    let acoimg = document.querySelectorAll('.accordion-button img');

    accordionButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            let collapse = this.parentElement.nextElementSibling;

            // close all the other accordion items
            accordionButtons.forEach(function(otherButton, otherIndex){
                if(otherButton !== button){
                    let otherCollapse = otherButton.parentElement.nextElementSibling;
                    otherCollapse.style.maxHeight = null;

                    // reset the image source and rotation for the other accordion items
                    acoimg[otherIndex].src = 'src/assets/images/icon/plus.png';
                    acoimg[otherIndex].style.transform = "rotate(0deg)";
                    otherButton.style.backgroundColor = "#fff";
                }
            });

            // toggle the clicked according item
            if(collapse.style.maxHeight) {
                collapse.style.maxHeight = null;

                // reset the image source, rotation, and background color when collapsing
                acoimg[index].src = 'src/assets/images/icon/plus.png';
                acoimg[index].style.transform = "rotate(90deg)";
                button.style.backgroundColor = '';
            } else {
                collapse.style.maxHeight = collapse.scrollHeight + "px";

                // change the image source, set rotation, and background color when expanding
                acoimg[index].src = 'src/assets/images/icon/menus.png';
                acoimg[index].style.transform = "rotate(180deg)";
                button.style.backgroundColor = "#c1b0b5";
            }
        });
    });
});

// Footer
const fom = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-message');

fom.addEventListener('submit', (event)=> {
    event.preventDefault();
    footerMessage.innerHTML = '~ Form Submitted success fully';
    footerMessage.style.display = 'flex';
    fom.reset();
    setTimeout(() => {
        footerMessage.style.display = 'none';
    }, 3000);
});

// BackToTop
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
}

function scrollToTop(){
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: 'smooth'
    })
}