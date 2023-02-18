// Redirect to Blog page
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'blog.html'
})

// Random Background on mouseenter
const allCardsElement = document.getElementsByClassName('card');
for (const card of allCardsElement) {
    card.addEventListener('mouseenter', function () {
        card.style.backgroundColor = getRandomColor();
    })
    card.addEventListener('mouseleave', function () {
        card.style.backgroundColor = 'white';
    })
}



/*--======-----========---
 Area Calculation
 ---========------========---*/
// Triangle
document.getElementById('triangle-calculation').addEventListener('click', function () {

    calculateEvent('Triangle', 'triangle-base', 'triangle-height', 0.5, "triangle-values")
});


// Rectangle
document.getElementById('rectangle-calculation').addEventListener('click', function () {
    calculateEvent('Rectangle', 'rectangle-width', 'rectangle-length', 1, "rectangle-values")
});


// Parallelogram
document.getElementById('parallelogram-calculation').addEventListener('click', function () {
    calculateEvent('Parallelogram', 'parallelogram-base', 'parallelogram-height', 1, "parallelogram-values")
});

// Rhombus
document.getElementById('rhombus-calculation').addEventListener('click', function () {
    calculateEvent('Rhombus', 'rhombus-d1', 'rhombus-d2', 0.5, "rhombus-values")
});

// Pentagon
document.getElementById('pentagon-calculation').addEventListener('click', function () {
    calculateEvent('Pentagon', 'pentagon-p', 'pentagon-b', 0.5, "pentagon-values")
});

// Ellipse
document.getElementById('ellipse-calculation').addEventListener('click', function () {
    calculateEvent('Ellipse', 'ellipse-a-axis', 'ellipse-b-axis', 3.1416, "ellipse-values")
});



