/**
 * Created by bigWhite on 17/8/1.
 */
window.onload=function() {
    var parsonalInformation = new Vue({
        el: '#self-information',
        data: {
            parsonInf: {
                name: '申阿瑟',
                sex: '女',
                age: 26,
                location: '广州',
                highestEducation: '硕士',
                graduationTime: '2017.7',
                phoneNum: '15757127620',
                email: 'shenase@foxmail.com',
                github: 'https://github.com/elsesir',
                blog: 'https://elsesir.github.io'
            }
        }
    });
    var educationDetail = new Vue ({
        el: '#education',
        methods : {
            detail: function(){
                document.getElementById('details').style.display='block',
                document.getElementById('fade').style.display='block'
            }
        }
    });
    var detailWindow = new Vue ({
        el: '#details',
        methods: {
            close: function() {
                document.getElementById('details').style.display='none',
                document.getElementById('fade').style.display='none'
            }
        }
    })


}