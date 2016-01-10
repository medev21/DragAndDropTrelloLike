// sortables
$( ".list-sortable" ).sortable();
$( ".list-sortable" ).disableSelection();

$( ".list" ).sortable();
$( ".list" ).disableSelection();

// drag and drop
$(".card").draggable({
  revert: "invalid",
  snap: "true",
  snapMode: "inner"
});

$(".list").droppable({
  revert: "invalid",
  // accept: '.card',
  drop: function(event, ui){
    ui.helper.css('top','');
    ui.helper.css('left','')
    $(this).find('.bottom').prepend(ui.helper);
  }
});
