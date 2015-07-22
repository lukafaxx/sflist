  $(document).ready(function() {

    // ----- Toggle App Info
    $('#toggle-app').on('click', function(){
      $('.app-content').toggle('fast');
      var el = $(this);
      if (el.text() == el.data('text-swap')) {
        el.text(el.data('text-original'));
      } else {
        el.data('text-original', el.text());
        el.text(el.data('text-swap'));
      }
    });

  });
