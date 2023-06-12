$('.team-mob-responsive').slick({
         dots: true,
         infinite: false,
         speed: 300,
         slidesToShow: 2,
         slidesToScroll: 2,
         responsive: [
           {
             breakpoint: 768,
             settings: {
               arrows: true,
               centerMode: true,
               centerPadding: '0px',
               slidesToShow: 2,
               slidesToScroll: 2
             }
           },
           {
             breakpoint: 767,
             settings: {
               arrows: true,
               centerMode: true,
               centerPadding: '0px',
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
      });

      $('.responsive').slick({
         dots: false,
         infinite: false,
         speed: 300,
         slidesToShow: 2,
         slidesToScroll: 2,
         responsive: [
           {
             breakpoint: 1600,
             settings: {
               arrows: true,
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 2,
               slidesToScroll: 2
             }
           },
           {
             breakpoint: 1599,
             settings: {
               arrows: true,
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
      });

      $('.single-item').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
           {
             breakpoint: 768,
             settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '0px',
               slidesToShow: 2,
               slidesToScroll: 2
             }
           },
           {
             breakpoint: 767,
             settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '0px',
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
      });

      $('.slider-steps').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
           {
             breakpoint: 1200,
             settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '0px',
               slidesToShow: 2,
               slidesToScroll: 2
             }
           },
           {
             breakpoint: 1199,
             settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '0px',
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
});