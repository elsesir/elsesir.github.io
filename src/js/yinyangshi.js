/**
 * Created by bigWhite on 17/8/16.
 */
$(document).ready(function() {
    $(".next").click(function(){
       // alert(count);
        $("#ro1").css({"animation": "rolehide-left 2s forwards"});
        $("#ro2").css({"animation": "rolehide-right 2s forwards"});
        $("#ro3").show().css({"animation": "roleshow-left 2s forwards"});
        $("#ro4").show().css({"animation": "roleshow-right 2s forwards"});
       // $("#ro1").addClass('r1');
       // $("#ro2").addClass('r2');
        $(".next").hide();
        $(".prev").show();
    });
    $(".prev").click( function() {
        $(".prev").hide();
        $(".next").show();
        $("#ro3").css({"animation": "rolehide-left 2s forwards"});
        $("#ro4").css({"animation": "rolehide-right 2s forwards"});
        $("#ro1").css({"animation": "roleshow-left 2s forwards"});
        $("#ro2").css({"animation": "roleshow-right 2s forwards"});
        // $("#ro1").addClass('r1');
    });
    //轮播图
    var bannerLen = $(".imgList li").length;//轮播图个数
    var curNav = 0;
    var bannerchange = setInterval( function(){
        if( curNav < bannerLen -1 ) {
            curNav ++;
        } else {
            curNav = 0;
        }
        changeTo( curNav );
    },2500);
    function  bannerchangeAgain  () {
        bannerchange = setInterval( function(){
            if( curNav < bannerLen -1 ) {
                curNav ++;
            } else {
                curNav = 0;
            }
            changeTo( curNav );
        },2500);
    }
    function changeTo( num ) {
        $(".imgList").animate( {left: "-" + num*360 + "px"},500);
        $(".banner_nav").find("a").removeClass("On").eq(num).addClass("On");
    }
    $(".banner_nav").find("a").each( function(item) {
        $(this).hover( function(){
            clearInterval(bannerchange);
            changeTo(item);
            curNav = item;
        }, function() {
        bannerchangeAgain();
        });
    });
});