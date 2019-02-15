$('[id^="a_"]').on('click', function(){
  $('.active').attr('class', 'inactive');
  $(this).attr('class', 'active');
  $('.show').attr('class', 'hide');

  $('#' + $(this).attr('id').substr(2)).attr('class', 'show');
})
