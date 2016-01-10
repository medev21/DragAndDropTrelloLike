// sortables

$( ".list-sortable, .list" ).sortable();
$( ".list-sortable, .list" ).disableSelection();

// $( ".list-sortable" ).sortable();
// $( ".list-sortable" ).disableSelection();
//
// $( ".bottom" ).sortable();
// $( ".bottom" ).disableSelection();

$(".list").sortable({
  cancel: 'header'
});//this exclude the header tag from being sorted!

///////end of sortables////////////


////// drag and drop////////

$(".card").draggable({
  revert: "invalid",
  snap: "true",
  snapMode: "inner"
});

$(".list").droppable({
  revert: "invalid",
  accept: '.card',
  drop: function(event, ui){
    ui.helper.css('top','');
    ui.helper.css('left','');
    $(this).find('.bottom').prepend(ui.helper);
  }
});

///////////end of drag and drop////////////////


// $( ".list" ).sortable();
