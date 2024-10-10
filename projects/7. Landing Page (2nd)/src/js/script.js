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