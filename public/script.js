console.log('Hello world')


$( () => {
    $( ".infoBlock" ).draggable();
    // let a = document.getElementsByClassName("infoBlock")
    let a = "xxx"
    let b = "yyy"
    $( "#1" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "#row1HoursData" )
            .html(a);
      }
    });
    $( "#2" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .addClass( "ui-state-highlight" )
            .find( ".data" )
              .html(a);
        }
      });
      $( "#3" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .addClass( "ui-state-highlight" )
            .find( ".data" )
              .html(a);
        }
      });
  } );
  console.log('Ran Bruh')