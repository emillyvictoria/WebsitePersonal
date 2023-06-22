$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        navText:[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,

            },
            600:{
                items:3,

            },
            1000:{
                items:3,

            }
        }
    })
});


const header = document.querySelector('.header');

/*window.addEventListener('scroll', () => { 
    header.classList.toggle('sticky', window.scrollY > 0);  
 });*/

 window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
  });