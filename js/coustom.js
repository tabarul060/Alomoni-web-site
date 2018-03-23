
    $(document).ready(function() {

      var owl = $("#latest-demo");

      owl.owlCarousel({
      autoPlay: 3000,
      items : 3, //10 items above 1000px browser width
      paginationSpeed : 400,
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0;
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      
      });
      var owl = $("#events-demo");

      owl.owlCarousel({
      autoPlay: 3000,
      items : 4, //10 items above 1000px browser width
      paginationSpeed : 400,
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0;
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      
      });
    });