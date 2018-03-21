/**
 * Created by bigWhite on 17/8/24.
 */
$(document).ready(function() {
    $('.goto-demo').hover( function(){
        $('.lianxi').show();
    });
    $('.lianxi').hover(function(){}, function() {
        $('.lianxi').toggle();
    });
    $('.goto-demo').click( function(){
        // 跳转到Demo列表页面
        // 轮播图页

    });
});