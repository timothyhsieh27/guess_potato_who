// //Event listeners
//
// $('#login').submit(function(event) {
//   event.preventDefault();
//   new User(loginValues());
//   checkUsers();
// });
//
// //make items draggable
//
// $('.items').draggable({
//       containment: '#features',  //only allows dragged item to be within #content container
//       snap: true,
//     } );
//
// //make potato droppable, hot potato
// $('#potato-container').droppable({
//      accept: '.items',
//      hoverClass: 'hovered',  //optional
//      drop: handleItemDrop    // function called once item is dropped
// });
//
// function handleItemDrop(event, ui) {
//   ui.draggable.draggable( 'disable' );
//    $(this).droppable( 'disable' );
// }

$('#login').submit(function(event) {
  event.preventDefault();
  loginValues();
});

function loginValues() {
       var context = {
           username: $('#username').val(),
           password: $('#password').val(),
       };
       checkUsers(context);
   }


function checkUsers(context) {
    $.ajax({
        "method": "GET",
        "url": '/login + context',
        "data": {},
        "datatype": "json",
        "success": function(data) {
          console.log(data);
            }
        });
}
