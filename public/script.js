console.log('Hello world')


$( () => {
    $( ".infoBlock" ).draggable();
    // let a = document.getElementsByClassName("infoBlock")
    $( ".row" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( ".adder" )
            .html("this is what i want to show up");
      }
    });
  } );
  console.log('Ran Bruh')