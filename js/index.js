let slides = document.querySelectorAll('.slide');
let slideConter = document.querySelector('.current-slide h3')
let activeSlide = 0;
setInterval(() => {
    let nextSlide;
    if(activeSlide === 2){
       activeSlide = nextSlide = 0;
       slides[0].classList.add('slide--active')
       slides[2].classList.remove('slide--active')
       slideConter.innerText = '01'

    }
    else{
        slides[activeSlide].classList.remove('slide--active')
        slides[++activeSlide].classList.add('slide--active')
        slideConter.innerText = `0${activeSlide + 1}`
    }
    
}, 8000);




$(document).ready(function(){
    $(".trips-list").owlCarousel({
        loop:true,
        margin: 25,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            }
        }
    });
  });

  $(document).ready(function(){
    $(".owl-categories").owlCarousel(
        {
            loop:true,
            margin: 10,
            responsiveClass:true,
            nav :false,
            responsive:{
                0:{
                    items:4,
                    nav:false
                },
                700:{
                    items:5,
                    nav:false
                },
                1100:{
                    items:6,
                    nav:false
                }
            }
        }
    );
  });