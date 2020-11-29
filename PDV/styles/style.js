
$('document').ready(function () {
    $('.pre_cmd').hide();
    $('.over .btn').click(function () {
        $('.pre_cmd').slideDown(1000);
        $('.streaming').hide();
    });
    $('.pre_cmdHeader span:nth-child(2)').click(function () {
        $('.pre_cmd').slideUp(1000);
    });

    var followingSlideValue = false;
    var streamSlideValue = false;
    $('.following').hide();
    $('.actions .pBtn a:first-child').click(function () {
        if (followingSlideValue) {
            $('.following').slideUp();
        }else{
            $('.following').slideDown();
            $('.streaming').slideUp();
        }
        followingSlideValue = !followingSlideValue;
    });
    /*$('.actions .pBtn a:first-child').click(function () {
        $('.sociaux').toggle();
    });*/
    
    $('.streaming').hide();
    $('.actions .pBtn a:nth-child(2)').click(function () {
        if (streamSlideValue) {
            $('.streaming').slideUp();
        }else{
            $('.streaming').slideDown();
            $('.following').slideUp();
        }
        streamSlideValue = !streamSlideValue;
    });

});