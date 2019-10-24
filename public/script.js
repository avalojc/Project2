console.log('Hello world')


$( () => {
    $( ".infoBlock" ).draggable();
    // let a = document.getElementsByClassName("infoBlock")
    let a = "xxx"
    let b = "yyy"
    $( "#1" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .find( "#row1HoursData" )
            .html(a);
        $( this ) 
          .find( "#row1SData" )
            .html(b);
      } 
    });
    $( "#2" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .find( "#row2HoursData" )
              .html(a);
          $( this ) 
            .find( "#row2SData" )
              .html(b);
        } 
      });
      $( "#3" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .find( "#row3HoursData" )
              .html(a);
          $( this ) 
            .find( "#row3SData" )
              .html(b);
        } 
      });

  } );
  console.log('Ran Bruh')
