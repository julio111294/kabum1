var sac = document.getElementById('sac');
var ctx = sac.getContext("2d")

    
    ctx.beginPath();
    ctx.strokeStyle = '#ffffff';
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.lineWidth = 10;
    ctx.stroke();

    var sac = document.getElementById('favoritos');
    var ctx = sac.getContext("2d")


    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.moveTo(75,40);
    ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);
    ctx.fill();

    var sac = document.getElementById('carrinho');
    var ctx = sac.getContext("2d")
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.rect(40,40,200,80)
    ctx.fill();

    ctx.beginPath();
    ctx.arc(20,30,20,(Math.PI/180)*0,(Math.PI/180)*360,true);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(80,130,20,(Math.PI/180)*0,(Math.PI/180)*360,true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(180,130,20,(Math.PI/180)*0,(Math.PI/180)*360,true);
    ctx.fill();