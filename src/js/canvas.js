/**
 * Created by bigWhite on 17/8/24.
 */
window.onload = function() {

    //画矩形
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';//填充颜色
    ctx.strokeStyle = 'green';//边框颜色
    ctx.fillRect(10, 10, 100, 100);//实心矩形
    ctx.strokeRect(10, 10, 100, 100);//实心矩形
    console.log(111);
    ctx.fill();//画实心图像（填充）
    ctx.stroke();//画空心图像（边框）

    //画圆
    var canvasArc = document.getElementById('canvasArc');
    canvasArc.width = 200;
    canvasArc.heighy = 200;
    var ctxArc = canvasArc.getContext('2d');
    ctxArc.beginPath();
    ctxArc.strokeStyle = 'blue';
    ctxArc.arc(canvasArc.width/2,canvasArc.heighy/2,50,0, Math.PI * 2,false);
    ctxArc.stroke();//边框
    ctxArc.fillStyle = 'red';
    ctxArc.fill();//填充


    //百分比圆弧
    var startrad = Math.PI * 0.5;
    var current = 90;
    var endrad = startrad + current/180 * Math.PI;
    var percent = document.getElementById('percent');
    percent.width = 400;
    percent.height = 300;
    var ctxper = percent.getContext('2d');
    //绘制底部圆
    ctxper.beginPath();
    ctxper.lineWidth = 8;
    ctxper.strokeStyle = 'lightgray';
    ctxper.arc(100,100,50,0,Math.PI *2, false);
    ctxper.stroke();
    //绘制进度条圆
    ctxper.beginPath();
    ctxper.lineWidth = 8;//边框宽度
    ctxper.strokeStyle = 'red';
    ctxper.arc(100,100,50,startrad, endrad,false);
    ctxper.lineCap = 'round';//末端线冒样式
    ctxper.stroke();
    //内部文字
    ctxper.font = "bold 14pt Arial";
    ctxper.fillStyle = "black";
    ctxper.textAlign = 'center';
    ctxper.textBaseline = 'middle';
    ctxper.moveTo(100,100);
    ctxper.fillText(current/360 * 100 +"%",100,100);
};
