$( document ).ready(function() {

  // Hamburger menu
  $('.hamburger-button').click(function(){
      $('.hamburger-button').toggleClass('active');
      $('.mobile-menu').toggleClass('active');
  });



  //Latest creations - slider gallery
  $('.slider-container').slick({
    autoplay: true,             // Do we want it to autoplay? true or false
    autoplaySpeed: 3000,        // How long between each slide when auto-playing
    speed: 1000,                // How fast is the transition in milliseconds
    arrows: true,               // Do you want to show arrows to trigger each slide
    accessibility: true,        // Enables keyboard tabbing and arrow key navigation
    dots: true,                 // Enables the dots below to show how many slides
    fade: false,                // Changes the animate from slide to fade if true
    infinite: true,             // When true, means that it will scroll in a circle
    pauseOnHover: false,         // When true means the autoplay pauses when hovering
    pauseOnDotsHover: true,     // Pauses the autoplay when hovering over the dots
      slidesToShow: 3,
      slidesToScroll: 1, 
      responsive: [               //responsive gallery so when you have a small screen, it shows only one picture When you watch on a desktop, it shows more pictures
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //infinite: true, //if you want it different on mobile, you let this in your code
          //dots: true
        }
      }
    ]
  });


  //review slider container
 
  $('.testimonial-slider-container').slick({
    autoplay: true,         // Do we want it to autoplay? true or false
    autoplaySpeed: 3000,    // How long between each slide when auto-playing
    speed: 1000,             // How fast is the transition in milliseconds
    arrows: false,           // Do you want to show arrows to trigger each slide
    accessibility: true,    // Enables keyboard tabbing and arrow key navigation
    dots: true,             // Enables the dots below to show how many slides
    fade: false,            // Changes the animate from slide to fade if true
    infinite: true,        // When true, means that it will scroll in a circle
    pauseOnHover: true,    // When true means the autoplay pauses when hovering
    pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
  });
});