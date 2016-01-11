$(document).ready(function(){
    $('.screening-item--poster').on('mouseover', function(){
        var poster_pos = $(this).offset();
        var poster_wid = $(this).width();
        var $info = $(this).parent().find('.screening-item--info').clone();
        $info.css({
            left: poster_pos.left + poster_wid + 8,
            top: poster_pos.top
        }).appendTo($('body')).show();

    });
    $('.screening-item--poster').on('mouseout', function(){
        $('body > .screening-item--info').remove();
    });
});
