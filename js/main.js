$(".Popupbtn").click(function() {
    $("div[id=" + $(this).attr("data-activity") +"]").fadeIn(200);
    });
$(".popup_close").click(function() {
    $(".mask").fadeOut(200);
});

// video
$(document).ready(
    function()
    {
        $('.video-box').delay(4000).fadeOut(200);
    }
);

$(".rwd-humburger-box").click(function(){
    $(".rwdmenu").addClass("nav-mobile-slide");
    $(".rwdmenu-bg").css("z-index","999; opacity: 1;");
    $(".rwdmenu-bg").fadeIn();
});

$(" .RWD_move_menu li , .navbar-close-btn , .RWD_move-topbtn").click(function(){
    $(".rwdmenu").removeClass("nav-mobile-slide");
    $(".rwdmenu").css("z-index","1; opacity: 0;");
    // $(".rwdmenu").hide();
    $(".rwdmenu-bg").fadeOut();
});

$(function(){
    $(".hidetogglebtn").click(function(){
        $(this).parent().find(".showcontent").slideToggle("slow");
});
});

$(function(){ 
    $('.menu-page02 , .rwd-page02').click(function(){ 
    $('html,body').animate({scrollTop:$('.page02').offset().top}, 500);});  
    $('.menu-page03 , .rwd-page03').click(function(){ 
    $('html,body').animate({scrollTop:$('.page03').offset().top}, 500);});  
    $('.menu-page04 , .rwd-page04').click(function(){ 
    $('html,body').animate({scrollTop:$('.page04').offset().top}, 500);});
    $('.menu-page06 , .rwd-page05').click(function(){ 
    $('html,body').animate({scrollTop:$('.page06').offset().top}, 500);});
    $('.menu-top , .rwd-top').click(function(){ 
    $('html,body').animate({scrollTop:$('.page01').offset().top}, 500);});
});
$(document).scroll(function() {
    var topy = $(this).scrollTop();
    if (topy > 2500) {
        $('.p3-peopleL').addClass('slideinL');
        $('.p3-peopleR').addClass('slideinR');
        $('.p3-maintitle').addClass('small');
        $('.page03').addClass('shake');

    } else {
        $('.p3-peopleL').removeClass('slideinL');
        $('.p3-peopleR').removeClass('slideinR');
        $('.p3-maintitle').removeClass('small');
        $('.page03').removeClass('shake');
    }
});

$(document).scroll(function() {
    var topy = $(this).scrollTop();
    if (topy > 880) {
        $('.logo').addClass('appear');
        $('.menu-top').addClass('appear');
    } else {
        $('.logo').removeClass('appear');
        $('.menu-top').removeClass('appear');
    }
});


