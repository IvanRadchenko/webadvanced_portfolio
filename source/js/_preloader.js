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
      imgs.push(path);
    }


    if (img) {
      var path = $this.attr('src');

      if (path) {
        imgs.push(path);
      }
    }
  });

  console.log(imgs);

});

