$(document).ready(function(){

var px = $("#slider").height();
var dir = -1


setInterval(function(){
$('#slider ul').animate({"marginTop" : px * dir},400,function(){
    $('#slider').find('li').eq(0).appendTo($(this));
    $(this).css("margin-top",0)
})

},3000)

$('#trigger').click(function(){
    $('.popup').removeClass('d-none')
})
$('.popup button').click(function(){
    $('.popup').addClass('d-none')
})

})