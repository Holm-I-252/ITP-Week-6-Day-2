
$('#containers').append("<div id='filler'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>",
"<div id='box' class='light'></div>");

$('#containers').on('click', '#box', function(){
    let toggle = $(this);
    $(toggle).toggleClass('light');
    $(toggle).toggleClass('dark')
       console.log('check');
  })
