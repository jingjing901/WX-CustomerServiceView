/**
 * Created by Administrator on 2016/5/25.
 */
var video = document.getElementByIdx_x_x("video");
navigator.getUserMedia({video:true}, function (stream) {
    video.src = window.webkitURL.createObjectURL(stream);
}, function (error) { alert(error); });


function scamera() {
    var videoElement = document.getElementByIdx_x_x('video');
    var canvasObj = document.getElementByIdx_x_x('canvas1');
    var context1 = canvasObj.getContext('2d');
    context1.fillStyle = "#ffffff";
    context1.fillRect(0, 0, 320, 240);
    context1.drawImage(videoElement, 0, 0, 320, 240);
}