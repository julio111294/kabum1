var c = document.getElementById('kabum_logo')
var ctx = c.getContext("2d");
ctx.font = "80px Arial";
ctx.strokeStyle= '#ffffff';
ctx.strokeText("kabum", 10, 80);
ctx.fill();


var ct = c.getContext("2d")
ct.font = "20px Arial";
ct.fillText("www.kabum.com.br", 20, 94);
ct.fillStyle = '#ffffff';
ct.fill();

var l1 = c.getContext("2d")
l1.lineWidth = 5;

l1.strokeStyle = '#E35214';
l1.beginPath();

l1.moveTo(240,70)
l1.lineTo(260,85)
l1.stroke()
l1.fill()

var l2 = c.getContext("2d")
l2.moveTo(250,70)
l2.lineTo(270,85)
l2.stroke()

var l3 = c.getContext("2d")
l3.moveTo(240,100)
l3.lineTo(260,85)
l3.stroke()

var l4 = c.getContext("2d")
l4.moveTo(250,100)
l4.lineTo(270,85)
l4.stroke()

var a = document.getElementById('busca')
var b1 = a.getContext("2d")
b1.moveTo(0,0)
b1.lineTo(70,70)
b1.stroke()

var b2 = a.getContext("2d")
b2.moveTo(70,70)
b2.lineTo(0,200) 
b2.stroke()

var b3 = a.getContext("2d")
b3.moveTo(80,0)
b3.lineTo(130,70)
b3.stroke()

var b4 = a.getContext("2d")
b4.lineWidth = 30;
b4.strokeStyle = '#E35214';
b4.moveTo(130,70)
b4.lineTo(80,200)
b4.stroke()

var b = document.getElementById('login')
var circle1 = b.getContext("2d")

circle1.fillStyle='#FFffff';
circle1.arc(100, 50, 40, ( Math.PI/180)*0,( Math.PI/180)*360, true);
circle1.fill();
circle1.beginPath();

circle1.arc(100,140, 50,(Math.PI/180)*0, (Math.PI/180)*180, true);
circle1.fill();

circle1.beginPath();
circle1.arc(100,100,90,( Math.PI/180)*0,( Math.PI/180)*360, true);
circle1.lineWidth = 10
circle1.strokeStyle='#ffffff';
circle1.stroke();

var sac = document.getElementById('sac')

