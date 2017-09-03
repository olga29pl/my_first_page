$(function() {
  $('button').click(sendData);
})

function sendData(e) {
  e.preventDefault();

  $.ajax({
    url: "https://formspree.io/pl.olga29@gmail.com",
    method: "POST",
    data: $(this).serialize(),
    dataType: "json",
  }).done(function() {
    $('form')[0].reset();
  })
}

$(function() {
    $('a[href="#gallery"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
});

$(function() {
    $('a[href="#footer"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 3000);
        }
    });
});