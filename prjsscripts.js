$(document).ready(function () {
    $(".custom-carousel").owlCarousel({
      autoWidth: true,
      loop: true,
      center: true,
      margin: 10,
      responsive: {
        0: {
          items: 1
        },
        640: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
      }
    });
  
    // Optional: Add click event to toggle active class
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
  