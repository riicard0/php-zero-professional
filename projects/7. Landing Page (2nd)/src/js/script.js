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
    infinite: false,
    autoplay: true,
    speed: 300,
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
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
});