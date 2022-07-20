const btn = document.getElementById('menu-btn');
const mobile_nav = document.querySelector('.nav-list');
const a_btn = document.querySelectorAll('.nav-list > li > a');
const navigation = document.querySelector('.navigation');
const lastname = document.querySelector('.lastname')
const hamburger_top = document.querySelector('.hamburger-top');
const hamburger_middle = document.querySelector('.hamburger-middle');
const hamburger_bottom = document.querySelector('.hamburger-bottom'); 




function toggleNav(){
    btn.classList.toggle('open');
    mobile_nav.classList.toggle('show');
    // document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', toggleNav);

a_btn.forEach(a =>{
    a.addEventListener('click', toggleNav)
});


// Scroll Effect Navigation
window.addEventListener('scroll', ()=>{
    
    if(window.scrollY > 0){
        a_btn.forEach(a =>{
            a.style.color = '#090a1a';
        });
        navigation.classList.add('sticky');
        lastname.style.color = '#090a1a';
        hamburger_top.style.background = '#333';
        hamburger_middle.style.background = '#333';
        hamburger_bottom.style.background = '#333'; 
        
    }else{
        lastname.style.color = '#fff';
        hamburger_top.style.background = '#fff';
        hamburger_middle.style.background = '#fff';
        hamburger_bottom.style.background = '#fff'; 
        a_btn.forEach(a =>{
            a.style.color = '#fff';
        });
        navigation.classList.remove('sticky');
    }
});



// ANIMATION
const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.profile-img', { delay: 350, origin: 'top' })
sr.reveal('.greet', { delay: 500, origin: 'left'})
sr.reveal('.name', { delay: 800, origin: 'left' })
sr.reveal('.about', { delay: 900, origin: 'left' })

sr.reveal('.section-porfolio, .section-contact', {delay: 500, origin: 'bottom'})

// Get current year and append it on footer
let date = new Date();
let year = document.querySelector('#year');
year.append(date.getFullYear())


