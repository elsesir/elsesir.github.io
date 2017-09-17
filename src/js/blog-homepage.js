/**
 * Created by bigWhite on 17/8/24.
 */
$(document).ready(function() {
    $('.a_lianxi').hover( function(){
        $('.lianxi').show();
    });
    $('.lianxi').hover(function(){}, function() {
        $('.lianxi').toggle();
    });
    $('.a_lianxi').click( function(){
        $('.lianxi').show();
    });


});