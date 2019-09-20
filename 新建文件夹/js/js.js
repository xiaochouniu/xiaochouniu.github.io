$('.next').on({click:function () {
    $('.container').fadeOut();
    $('#dongtai').fadeOut();
    $('.showcase').show();
    $(this).hide();
    $('.nexttwo').show();
    $('#abiaoqian').show()

}})
// $('.nexttwo').click(function(){
//     window.location.assign ="http://www.baidu.com";
// });
$("body").css({
    　　position: "fixed",
    　　width: "100%"
    });
    document.body.addEventListener("touchmove", bodyScroll, false);
    function bodyScroll(event) {
    　　event.preventDefault();
    }