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