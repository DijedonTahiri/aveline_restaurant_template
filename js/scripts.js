

window.addEventListener('DOMContentLoaded', event => {
    const navbarCollapsible = document.body.querySelector('#mainNav');
  
    if (!navbarCollapsible) return;
  
    const handleScroll = () => {
      if (window.scrollY === 0 && !document.documentElement.classList.contains('no-scroll')) {
        navbarCollapsible.classList.remove('navbar-shrink');
      } else {
        navbarCollapsible.classList.add('navbar-shrink');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Add the following code to adjust the navbar on page load
    handleScroll();
  });

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    

     // This script waits for the "Explore Our Full Menu" button to be clicked
     document.getElementById('fullMenuBtn').addEventListener('click', function() {
        // When the button is clicked, it finds the full menu (which is initially hidden)
        // and removes the 'd-none' class that is making it hidden
        document.getElementById('fullMenu').classList.remove('d-none');

        // It also hides the "Explore Our Full Menu" button after it's clicked
        document.getElementById('fullMenuBtn').classList.add('d-none');
    });


    
    new SimpleLightbox({
        elements: '#gallery a.gallery-box'
    });

;


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("bookNowButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

