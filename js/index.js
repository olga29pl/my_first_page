$(function(){
  $('input[type=submit').click(sendData);
})

function sendData(e) {
  e.preventDefault();
  
  $.ajax({
    url: "https://formspree.io/pl.olga29@gmail.com", 
    method: "POST",
    dataType: "json",
    data: $(this).serialize()
  }).done(function(){
    $('form')[0].reset();
  })
}

    