$(document).ready(function() {
  $('.button').on("click", function() {
    console.log($(this).attr('id'))
    $.post( "/status", { status: $(this).attr('id')} );
    updateStatus();
  });
  function updateStatus(){
    fetch('./status')
    .then(response => response.json())
    .then(data => {
      $('#status').removeClass().text(data.status).addClass(data.status)
    });
  };
  updateStatus();
});