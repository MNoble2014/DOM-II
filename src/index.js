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

// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10