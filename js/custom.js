jQuery(function($) {
  $(document).ready( function() {


    $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 50,
                nav: true,
                loop: true,
                autoplay: Boolean,
                autoplayTimeout: 4000,
                responsive: {
                  0: {
                    items: 4
                  },
                  600: {
                    items: 4
                  },
                  1000: {
                    items: 4
                  }
                }
              })
            })

      });
              });