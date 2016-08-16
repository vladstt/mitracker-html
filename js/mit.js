$('.ui.dropdown')
  .dropdown();

$(document).ready(function() {
  /* Trigger the modal */
  $('.add-asset').click(function() {
    $('.ui.add.modal')
      .modal({
        blurring: true
      }) .modal('show');;
  });
  
  $('.stats-trigger').click(function() {
    $('.ui.sidebar').sidebar('toggle');
  });
  
})