import './less/index.less'

// Your code goes here!
// 1 mouseleave
const destination = document.querySelectorAll(".destination");
destination.forEach(function(e) {
    e.addEventListener('mouseleave', function() {
        e.style.backgroundColor = 'purple';
        e.style.color = 'white';
    });
})

// stops nav from refreshing and stops propagation
// 2 click x 2
const noRefresh = document.querySelector('.nav');
noRefresh.addEventListener('click', function(event) {
    console.log('I was clicked');
    event.preventDefault();
});

const blog = document.querySelectorAll('.nav a');
blog[2].addEventListener('click', function(e) {
    alert('My blog is empty')
    e.stopPropagation();
});

// 3 mousemove
const btnsOmg = document.querySelectorAll('.btn');
btnsOmg[0].addEventListener('mousemove', function() {
    btnsOmg[0].textContent = "O"
});
btnsOmg[1].addEventListener('mousemove', function() {
    btnsOmg[1].textContent = "M"
});
btnsOmg[2].addEventListener('mousemove', function() {
    btnsOmg[2].textContent = "G"
});

// 4 mouseover
const footer = document.querySelector('footer');
footer.addEventListener('mouseover', function(e) {
    console.log('poof');
    e.stopPropagation();
});

// 5 contextmenu
btnsOmg.forEach(function(e) {
    e.addEventListener('contextmenu', function() {
        e.style.backgroundColor = 'lightgreen';
    })
});

// 6 wheel
const foot = document.querySelector('footer');
foot.addEventListener('wheel', function(e) {
    e.stopPropagation();
});

// 7 copy
window.addEventListener('copy', function() {
    alert("No Touch, No Copy")
})

// 8 auxclick
const anchors = document.querySelectorAll(".nav a");
anchors.forEach(function(e) {
    e.addEventListener('auxclick', function() {
        e.style.color = 'red';
        console.log("I turn links red and rhyme')")
    });
})

// 9 keydown
// 10 drag