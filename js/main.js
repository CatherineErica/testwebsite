console.log('testing');

var box = $('.box');
var btn = $('.btn');

btn.on('click', function(){
box.html( "<p>All new content. <em>You bet!</em></p>" );

})
