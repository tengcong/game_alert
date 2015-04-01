$(function(){
  var height = window.innerHeight - 40
  var width = window.innerWidth - 40

  var imageUrl =  'http://img.manhua.weibo.com/comic/6/1506/74493/003_74493_big.jpg';
  var downUrl = 'http://baidu.com';

  $("<div class='advertise'>")
  .hide()
  .css({'position': 'absolute', 'z-index': 999, 'left': '20px', 'top': '20px', 'overflow': 'hidden', 'display': 'none', 'border-radius': '10px'})
  .append($('<a/>')
    .attr('href', downUrl)
    .append($("<img/>")
      .attr('src', imageUrl)
      .css({'width': width, 'height': height})
    )
  )
  .append($('<a/>')
    .attr('href', "#")
    .attr('id', "close_alert")
    .css({ 'position': 'absolute', 'top': '3px', 'right': '3px', 'z-index': 1000 })
    .text('关闭')
  )
  .appendTo($("body"))

  $('.advertise').fadeIn(1000)

  $("#close_alert").on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".advertise").fadeOut(1000)
  });
})
