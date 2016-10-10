//preloader


$(function () {

  var img = [];

  $.each($('*'), function () {
    var
      $this = $(this),
      background = $this.css('background-image'),
      img = $this.is('img');

    if (background != 'none') {
      var path = background.replace('url("', '').replace('")', '');
      img.push(path);
    }


    if (img) {
      var path = $this.attr('src');

      if (path) {
        img.push(path);
      }
    }
  });

  for (var i = 0; i < imgs.length; i++) {
    var image = $('<img>', {
      attr: {
        src: img[i]
      }
    });

    image.on('load', function () {
      console.log('image is loaded');
    })

  }

});

