$(document).ready(function(){

  // =Hero
  // Alway make hero-container height equal to window height

  var $heroContainer = $('.hero');

  $heroContainer.height(window.innerHeight);

  // When user resize browser window, hero container needs to have the same
  // height as browser window height.

  $(window).resize(function() {
    $heroContainer.height(window.innerHeight);
  });
/**
 * FastClick
 */

if ( 'addEventListener' in document ) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach( document.body );
    }, false );
}
// sLIDEBARS FUNCTIONS
( function ( $ ) {
        // Initialize Slidebars
        var controller = new slidebars();
        controller.init();
            // Toggle Slidebars
        $( '.toggle-id-1' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-1' );
        } );
            // Close any
    $( document ).on( 'click', '.js-close-any', function ( event ) {
      if ( controller.getActiveSlidebar() ) {
        event.preventDefault();
        event.stopPropagation();
        controller.close();
      }
    } );

    // Close Slidebar links
    $( '[off-canvas] a' ).on( 'click', function ( event ) {
      event.preventDefault();
      event.stopPropagation();

      var url = $( this ).attr( 'href' ),
      target = $( this ).attr( 'target' ) ? $( this ).attr( 'target' ) : '_self';

      controller.close( function () {
        window.open( url, target );
      } );
    } );

    // Add close class to canvas container when Slidebar is opened
    $( controller.events ).on( 'opening', function ( event ) {
      $( '[canvas]' ).addClass( 'js-close-any' );
    } );

    // Add close class to canvas container when Slidebar is opened
    $( controller.events ).on( 'closing', function ( event ) {
      $( '[canvas]' ).removeClass( 'js-close-any' );
    } );

      } ) ( jQuery );
  // =Work
  // Isotope filters

  var $workFilterLinks = $('.work-filters li'),
      $container = $('.work-items');

  $workFilterLinks.find('a').click(function(){

    $workFilterLinks.removeClass('active');

    $container.isotope({
      // options
      filter: $(this).attr('data-filter'),
      itemSelector: '.isotope-item',
      animationEngine : "best-available",
      masonry: {
        columnWidth: '.isotope-item'
      }
    });

    $(this).parent().addClass('active');

    return false;
  });

  // Menu initialization

  var $menuIcon = $('.menu-icon'),
      $navigation = $('.navigation'),
      $mainNavigation = $('.main-navigation'),
      $navigationLink = $('.main-navigation a');

  $(window).scroll(function() {
    if(window.scrollY > window.outerHeight) {
      $menuIcon.addClass('active');
    } else {
      $menuIcon.removeClass('active');
    }
  });

  $menuIcon.click(function(e) {
    e.preventDefault();

    $navigation.toggleClass('active');
  });


  // Scrollreveal initialize

  var config = {

    easing: 'hustle',
    reset:  false,
    delay:  'onload',
    opacity: .2,
    vFactor: 0.2,
    mobile: false
  }


});
