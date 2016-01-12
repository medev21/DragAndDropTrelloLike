// sortables
$( ".list-sortable" ).sortable().disableSelection();

// $(".list").sortable({
//   cancel: 'header'
// });
//this exclude the header tag from being sorted!

///////end of sortables////////////


////// drag and drop////////

$(".list").sortable({
  cancel: 'header',
  connectWith: ".bottom",
  helper: "",
  revert: "invalid",
  start: function (event, ui) {
      var $item = ui.helper;
      $item.css({
        'width': $('.list .card').width(),
        'height': $('.list .card').height()
      });
  },
  stop: function (event, ui) {}
});

$(".bottom").sortable({
  placeholder: "ui-state-highlight",
  connectWith :'.list',
  revert: true,
  cursor: "move",
  items: ".card",
  drop: function (event, ui) {

  },
  stop: function (event, ui) {
      var $obj = $(ui.item);
      //
      }
});

///////////end of drag and drop////////////////



////// drag and drop////////

// $(".card").draggable({
//   revert: "invalid",
//   snap: "true",
//   snapMode: "inner"
// });
//
// $(".list").droppable({
//   revert: "invalid",
//   // accept: '.card',
//   accept: ":not(.ui-sortable-helper)",
//   drop: function(event, ui){
//     ui.helper.css('top','');
//     ui.helper.css('left','');
//     $(this).find('.bottom').prepend(ui.helper);
//   }
// });

///////////end of drag and drop////////////////
