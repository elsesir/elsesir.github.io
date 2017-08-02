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
                location: '杭州',
                highestEducation: '硕士',
                graduationTime: '2017.7',
                phoneNum: '15757127620',
                email: 'shenase@foxmail.com',
                github: 'https://github.com/elsesir',
                blog: 'https://elsesir.github.io/'
            }
        }
    });

}