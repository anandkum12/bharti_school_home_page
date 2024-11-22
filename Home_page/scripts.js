
let currentTestimonial = 0;

const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
        testimonial.style.display = 'none';
    });
    
    testimonials[index].style.display = 'block';
}

function nextTestimonial() {
    currentTestimonial++;
    if (currentTestimonial >= totalTestimonials) {
        currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial--;
    if (currentTestimonial < 0) {
        currentTestimonial = totalTestimonials - 1;
    }
    showTestimonial(currentTestimonial);
}
showTestimonial(currentTestimonial);
setInterval(nextTestimonial, 5000);


document.querySelector('.prev-btn').addEventListener('click', prevTestimonial);
document.querySelector('.next-btn').addEventListener('click', nextTestimonial);


const heroContent = document.querySelector('.hero-content');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.5 
});

observer.observe(heroContent);
