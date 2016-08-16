$('.ui.dropdown')
  .dropdown();

$(document).ready(function() {
  /* Trigger add asset the modal */
  $('.add-asset').click(function() {
    $('.ui.add.modal')
      .modal({
        blurring: true
      }) .modal('show');;
  });
  
  /* Trigger the settings modal */
  $('.show-account').click(function() {
    $('.ui.account.modal')
      .modal({
        blurring: true
      }) .modal('show');;
  });
  
  $('.stats-trigger').click(function() {
    $('.ui.sidebar').sidebar('toggle');
  });
  
})