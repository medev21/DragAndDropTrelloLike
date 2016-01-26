// sortables
// make div col-lg-10 a sortable, call class list-sortable
$( ".list-sortable" ).sortable({
  cancel: '.listA, .listB'  //exclude these classes from being sorted
}).disableSelection();

///////end of sortables////////////


////// drag and drop////////

$(".listA").sortable({
  cancel: 'header', //this exclude the header tag from being sorted!
  connectWith: ".listB", //connect with the other sortable function
  helper: "",
  revert: "invalid",
  // forcePlaceholderSize: true,
  start: function (event, ui) {
      var $item = ui.helper;
      $item.css({
        'width': $('.card').width(),
      });
      ui.placeholder.height(ui.item.height()); //placeholder full height
  },
  stop: function (event, ui) {}
});

$(".listB").sortable({
  placeholder: "ui-state-highlight",
  connectWith :'.listA',  //connect with the other sortable function
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
