console.log('Hello world')


$( () => {
    $( ".infoBlock" ).draggable();
    // let a = document.getElementsByClassName("infoBlock")
    let a = "xxx"
    $( ".row" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( ".data" )
            .html(a);
      }
    });
  } );
  console.log('Ran Bruh')