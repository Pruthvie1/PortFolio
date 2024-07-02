// Smooth Scroll
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex', '-1');
          $target.focus();
        }
      });
    }
  }
});

// Form Validation
$('form').submit(function(event) {
  const name = $('#name').val();
  const email = $('#email').val();
  const message = $('#message').val();

  if (!name || !email || !message) {
    alert('All fields are required!');
    event.preventDefault();
  }
});

// Project Filter
$('.filters button').click(function() {
  const filter = $(this).data('filter');
  $('.project').each(function() {
    if (filter === 'all' || $(this).data('category') === filter) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

// Trigger animations on scroll
$(window).scroll(function() {
  $('.animate__animated').each(function() {
    if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
      $(this).addClass('animate__fadeIn');
    }
  });
});
// Add JavaScript to handle click event on "View My Work" button
document.getElementById('view-work-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    document.getElementById('projects').classList.add('animate__animated', 'animate__fadeIn'); // Add animation classes to projects section
});
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const btn = card.querySelector('.btn');
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            // Example: Toggle a modal or show/hide more details
            alert(`Details for ${card.querySelector('h3').innerText}`);
        });
    });
});
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.classList.add('animate__animated', 'animate__zoomIn');
        });
    }, 500); // Delay for the scroll to finish
});
const searchBar = document.getElementById('searchBar');
const projectCards = document.querySelectorAll('.project-card');

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    projectCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(searchString)) {
            card.style.display = 'block';
            card.classList.add('animate__animated', 'animate__fadeIn');
        } else {
            card.style.display = 'none';
        }
    });
});
