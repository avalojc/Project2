console.log('Hello world')
$( () => {
    $( ".infoBlock" ).draggable();
    // let a = document.getElementsByClassName("infoBlock")
    let a = 01
    let b = 10
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
// thumbnails = () => {
//     let thumbEl= document.getElementsByClassName('thumb')
//     if(thumbEl.innerHTML = "airplane") {
//         let img = thumbEl.createElement('img');
//         img.src = "/image/plane.png";
//         thumbEl.appendChild(img);
//     }
// }
// thumbnails()