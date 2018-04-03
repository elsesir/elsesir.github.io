/**
 * Created by bigWhite on 17/8/1.
 */
window.onload=function() {
    var date = new Date();
    Vue.component('pops', {
        // 选项
        template:'<div class="pops">' +
        '<div class="pop-bg" @click="hide"></div>' +
        '<div class="pop-content" ></div></div>',
        data: function() {
            return {};
        },
        props: {
            popContent: {
              type: String,
                default: ''
            }
        },
        methods: {
          hide: function() {
              // console.log(this.popContent);
              // console.log('isClick');
              this.$emit('click-popbg');
          }
        },
        watch: {
           popContent: function () {
               $('.pop-content').empty().append(this.popContent);
           }
        }
    });
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
            },
            popsShow: false,
            popsContent: '',
            themeList: [
                {
                    'name': '夏日海滩',
                    'code': 'summer'
                },
                {
                    'name': '粉玫瑰',
                    'code':'rose'
                }],
            activeTheme: 0
        },
        computed: {
            parsonInf_age: function(){
                return date.getFullYear() - 1991;
            }
        },
        watch: {
            // activeTheme: function() {
            //     var index = this.activeTheme;
            //     $('.themes li.theme-active').removeClass('theme-active');
            //     $('.themes li').eq(index).addClass('theme-active');
            // }
        },
        methods : {
            showPop: function() {
                // console.log('showPop');
                this.popsShow = true;
            },
            hidePop: function() {
                // console.log('hidePop');
                this.popsContent = ''; // 关闭的时候清空pops内容
                this.popsShow = false;
            },
            showZJUT: function()  {
                this.popsContent = '<p class="experience-part_title">2014.09 - 2017.06  浙江工业大学 软件工程 图像处理 学硕</p>'+
                    '<p>主要研究方向：图像处理，模式识别；</p>'+
                '<p><span>主修课程：</span>计算理论基础、现代网络原理、人工智能原理与应用、软件工程技术与设计；</p>'+
                '<p><span>主要工作：</span>基础理论学习，参与国家自然基金项目，获取一等学业奖学金。</p>';
                this.showPop();
            },
            showSHUT: function() {
                this.popsContent = '<p class="experience-part_title">2010.09 - 2014.06  上海电力学院 信息安全 本科</p>'+
                    '<p>信息安全专业是计算机与数学等多学科交叉学科，包括计算机课程和一些相关的数学课程。</p>'+
                '<p><span>主修课程：</span>C++程序设计、数据结构、计算机组成原理、计算机网络、数据库原理、操作系统原理、密码学、计算网络安全、计算机系统安全、信息安全、嵌入式；</p>'+
                '<p><span>主要工作：</span>各科成绩优秀，连续三年获得学校一等奖学金，并在2013年获得上海市奖学金，在2014年毕业时获得上海市优秀毕业生。</p>';
                this.showPop();
            },
            showHTS: function() {
                this.popsContent = '<p class="experience-part_title">2017.10 - 2018.04 云智投高端平台 深圳云财经大数据技术有限公司</p>' +
                '<p><span>项目网址：</span><a href="http://platform.yunzhitou123.com">http://platform.yunzhitou123.com</a></p>'+
                    '<p><span>项目介绍：</span>云智投高端平台是一款基于Vue 的SPA，核心业务是股票行情的展示，包括全部A 股股票的实时数据信息，并提供独家内参消息、热门题材、行情分析预测等功能。主要面向证券公司，提供系统级支持。</p>' +
                '<p><span>主要技术：</span>基于Vue 框架，使用ES6 语法，以vuex 进行组件间状态管理，webpack 为构建工具，Websocket 实现股票实时数据的推送，有自写的列表组件用于展示A股3000+股票的实时行情，和基于zrender 的自写图表库绘制股票分时k线图。</p>' +
                '<div><span>主要工作：</span>1. 添加退出登录及第三方登录功能；2. 优化搜索弹窗：事件冒泡造成的删除异常问题；搜索套餐、用户中心弹窗、问股弹窗和新闻弹窗的交互逻辑优化。3. 优化原自写列表组件：解决MAC 手势引起的崩溃问题、列表显示不全问题，添加双击事件、拖拽排序功能；4. 优化自写图表库：图表库对坐标处理不够完善，优化更灵活的坐标标签显示；5. 添加波段收割者模块：利用图表库绘制股票图表。</div>';
                this.showPop();
            },
            showYCJ: function() {
                this.popsContent = '<p class="experience-part_title">2017.10 - 2018.04 云财经PC端及移动端官网 深圳云财经大数据技术有限公司</p>' +
                    '<p><span>项目网址： </span>PC 端 <a href="http://www.yuncaijing.com/">http://www.yuncaijing.com/</a>' +
                    ' M 端 <a href="http://m.yuncaijing.com/">http://m.yuncaijing.com/</a></p>'+
                '<p><span>项目介绍：</span>云财经官网PC 端是传统网站结构，为用户提供股票实时数据、云财经独家预测、内参资讯及相关增值服务。M 端是云财经移动版及微信公众号的主体内容，对云财经的各项服务进行更精简的展示，并提供一些移动端特有的交互服务。</p>'+
                '<p><span>主要技术：</span>基于jQuery、require.js、thinkPHP 模板的web 网站项目，使用Gulp 构建工具，股票相关图表绘制使用highChart 图表库，PC 端推送使用WebSocket-cmd 和轮询。</p>'+
                '<div><span>主要工作：</span>1. 在PC 端相关页面添加波段收割者入口信息，包括修改Vue 弹窗组件；2. 修改PC 端自写的superK 线图组件，删除无用的弹窗页面；3. 完善PC 和M 端用户资料页逻辑；4. 为M 端添加分时复权计算、波段收割者功能模块；5. 波段分割者助力分享模块及波段收割者功能权限控制；6. 修改M端首页交互滑动切换功能。</div>';
                this.showPop();
            },
            showEDU: function() {
                this.popsContent = '<p class="experience-part_title">2014.09 — 2017.06 生物群体行为语义模型研究及应用 国家自然科学基金</p>' +
                    '<p><span>项目介绍：</span>该项目属于国家自然科学基金及浙江省自然科学基金项目。通过单摄像头单平面镜建立鱼目标三维信息采集平台,可以定位实验鱼的三维坐标，对其行为进行追踪；根据追踪数据对鱼行为进行语义分析，包括鱼目标的群体行为分析、死亡监测等，及由此进行水质监测。目前有相关监测设备在水厂试用。'+
                '<p><span>主要技术：</span>使用C++和openCV 库开发，涉及图像处理，视频跟踪，行为分析，模式识别等方面。</p>'+
                '<p><span>主要工作：</span>负责将导师提出的单目鱼目标三维定位算法通过C++编程实现，同时针对实验中一种由光学现象引起误差进行分析和实验，提出了相关消除算法，提高了整个系统的鲁棒性和精度，并最终完成了系统实现，拟写两篇论文。</p>';
                this.showPop();
            },
            // summerTheme: function() {
            //     $("link[title='summer']").removeAttr("disabled");
            //     $("link[title='rose']").attr('disabled','disabled');
            //     this.activeTheme = 0;
            // },
            // roseTheme: function() {
            //     $("link[title='rose']").removeAttr("disabled");
            //     $("link[title='summer']").attr('disabled','disabled');
            //     this.activeTheme = 1;
            // },
            changeTheme: function(item,index){
                this.activeTheme = index;
                $("link[title]").attr('disabled','disabled');
                $('link[title='+item.code+']').removeAttr('disabled');
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
    // $('#education').click( function() {
    //     $('.mark').show();
    // });
    // $('.mark').click( function() {
    //     $('.mark').hide();
    //     $('.details_content').hide();
    // });
};