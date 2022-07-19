const btn = document.getElementById('menu-btn');
const mobile_nav = document.querySelector('.nav-list');

const a_btn = document.querySelectorAll('.nav-list > li > a');

console.log(a_btn);

function toggleNav(){
    btn.classList.toggle('open');
    mobile_nav.classList.toggle('show');
    // document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', toggleNav);

// Get current year and append it on footer
let date = new Date();
let year = document.querySelector('#year');

year.append(date.getFullYear())

a_btn.forEach(a =>{
    a.addEventListener('click', toggleNav)
})

