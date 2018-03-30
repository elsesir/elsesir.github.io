/**
 * Created by bigWhite on 17/8/1.
 */
window.onload=function() {
    var parsonalInformation = new Vue({
        el: '.all-body',
        data: {
            parsonInf: {
                name: '申阿瑟',
                sex: '女',
                location: '深圳',
                highestEducation: '硕士',
                graduationTime: '2017.7',
                phoneNum: '15757127620',
                email: 'shenase@foxmail.com',
                github: 'https://github.com/elsesir',
                blog: 'https://elsesir.github.io',
                job: '深圳云财经大数据技术有限公司'
            }
        },
        computed: {
            parsonInf_age: function(){
                var date = new Date();
                return date.getFullYear() - 1991;
            }
        },
        methods : {
            detail: function(){
                document.getElementById('details').style.display='block',
                    document.getElementById('fade').style.display='block'
            },
            // close: function() {
            //     document.getElementById('details').style.display='none',
            //         document.getElementById('fade').style.display='none'
            // }
            close: function() {
                document.getElementById('details').style.display='none';
                $('.mark').hide();
            }
        }
    });

    $(window).scroll(function(){
        if( $(window).scrollTop() > 100) {
            $(".tag-fiexd").show();
        } else  {
            $(".tag-fiexd").hide();
        }
    });
    $('#education').click( function() {
        $('.mark').show();
    });
    $('.mark').click( function() {
        $('.mark').hide();
        $('.details_content').hide();
    });
};