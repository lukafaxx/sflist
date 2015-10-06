  $(document).ready(function() {

    // ----- Toggle App Info
    $('#toggle-app').on('click', function(){
      $('#app-content').slideToggle('slow');
      $('#donation-content').slideUp('slow');
      $('#hello-content').slideUp('slow');
    });

    $('#toggle-donation').on('click', function(){
      $('#donation-content').slideToggle('slow');
      $('#app-content').slideUp('slow');
      $('#hello-content').slideUp('slow');
    });

    $('#toggle-hello').on('click', function(){
      $('#hello-content').slideToggle('slow');
      $('#app-content').slideUp('slow');
      $('#donation-content').slideUp('slow');
    });

  });
