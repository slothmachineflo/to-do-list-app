$("#button").on("click", function (){

  let val = $("#input").val();
  let $newElement = $('<li>');
  $newElement.html(val + " <crossOutButton>X</crossOutButton>");
  $newElement.on('click', function(){
      $(this).toggleClass('strike')
  })
  $("#list").append($newElement);
  $("#list").on('click', 'crossOutButton', function(){
      $(this).closest('li').remove();
  })

})


$( "#list" ).sortable();