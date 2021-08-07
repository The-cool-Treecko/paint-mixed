var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var screen_width = screen.width;
var screen_width2 = screen_width - 70;
var screen_height = screen.height;
var screen_height2 = screen_height - 300;
if (screen_width < 992) {
    canvas.width = screen_width2;
    canvas.height = screen_height2;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

var mouseevent = "empty";
canvas.addEventListener("mousedown",mousedown);

function mousedown(e){
    mouseevent = "mousedown";
    console.log(mouseevent);
}

canvas.addEventListener("mousemove",mousemove);

function mousemove(e){
    currentPositionX = e.clientX - canvas.offsetLeft;
    currentPositionY = e.clientY - canvas.offsetTop;
    console.log("current position of x ="+currentPositionX,"current position of y ="+currentPositionY);
    if (mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(currentPositionX,currentPositionY);
        ctx.stroke()
    }
    last_position_of_x = currentPositionX;
    last_position_of_y = currentPositionY;
}

canvas.addEventListener("mouseup",mouseup);

function mouseup(e){
    mouseevent = "mouseup";
}

canvas.addEventListener("mouseleave", mouseleave);

function mouseleave(e){
    mouseevent = "mouseleave";
}