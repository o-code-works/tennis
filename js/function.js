// sp_navi
if(window.innerWidth <= 768) {
  $('.navi_button').click(function(){
    $('.navi_menu').toggleClass('active');
    $(this).toggleClass('active');
  })
  $('.navi a').click(function(){
    $('.navi_button').click();
  })
}
// smoothscroll
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust + 1;
    $('html,body').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
// touch now
$(function(){
  $('.card').on("touchstart", function() {
    $('.card').removeClass("now");
    $(this).addClass("now");
  });
});

// change people
$(function(){
  $('.people').change(function(){
    var p = $('option:selected').val();
    $('.table').removeClass('select');
    if(p=='5'){
      $('.table05').addClass('select');
    }else if(p=='6'){
      $('.table06').addClass('select');
    }else if(p=='7'){
      $('.table07').addClass('select');
    }else if(p=='8'){
      $('.table08').addClass('select');
    }else if(p=='9'){
      $('.table09').addClass('select');
    }else{
    }
  })
});