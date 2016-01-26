// sortables
// $( ".list-sortable" ).sortable({
//   items: "section"
// }).disableSelection();

$( ".list-sortable" ).sortable({
  cancel: '.listA, .listB'
}).disableSelection();

///////end of sortables////////////


////// drag and drop////////

$(".listA").sortable({
  cancel: 'header', //this exclude the header tag from being sorted!
  connectWith: ".listB",
  helper: "",
  revert: "invalid",
  // forcePlaceholderSize: true,
  start: function (event, ui) {
      var $item = ui.helper;
      $item.css({
        'width': $('.card').width(),
      });
      ui.placeholder.height(ui.item.height());
  },
  stop: function (event, ui) {}
});

$(".listB").sortable({
  // tolerance: 'pointer',
  placeholder: "ui-state-highlight",
  connectWith :'.listA',
  revert: true,
  cursor: "move",
  items: ".card",
  // forcePlaceholderSize: true,
  drop: function (event, ui) {

  },
  stop: function (event, ui) {
      var $obj = $(ui.item);
      //
      }
});

// $(".list").sortable({
//   cancel: 'header, .bottom', //this exclude the header tag from being sorted!
//   connectWith: ".list",
//   // helper: "",
//   revert: "invalid",
//   // forcePlaceholderSize: true,
//   start: function (event, ui) {
//       var $item = ui.helper;
//       $item.css({
//         'width': $('.list article').width(),
//       });
//       ui.placeholder.height(ui.item.height());
//   },
//   stop: function (event, ui) {}
// });
//
// $(".list").sortable({
//   placeholder: "ui-state-highlight",
//   connectWith :'.list',
//   revert: true,
//   cursor: "move",
//   items: "article",
//   // forcePlaceholderSize: true,
//   drop: function (event, ui) {
//
//   },
//   stop: function (event, ui) {
//       var $obj = $(ui.item);
//       //
//       }
// });

// $('.bottom').removeClass('ui-sortable-handle ui-sortable-helper');

// $(".bottom").sortable({
//   placeholder: "ui-state-highlight",
//   connectWith :'.list',
//   revert: true,
//   cursor: "move",
//   items: ".card",
//   drop: function (event, ui) {
//
//   },
//   stop: function (event, ui) {
//       var $obj = $(ui.item);
//       //
//       }
// });

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

// $(".list").sortable({
//   cancel: 'header'
// });
