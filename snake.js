window.onload = function(){
    

    var snakeOb = {
        x:100,
        y:100,
        move:'r',
        oldMove:'',
        lenght:4
    }

    var food={
        
        x:20,
        y:80,
        newFood:function newFood() {
            this.x=(Math.ceil(Math.random()*700-20)+1);
            this.y=(Math.ceil(Math.random()*700-20)+1);
            this.x-=this.x %20;
            this.y-=this.y %20;
            console.log(this.y);
            console.log(this.x);
            
            
        }
    }
    food.newFood();

    var area =document.getElementById('area');
    var i;
    var exPos =[];/*
    exPos[0]={x:10,y:20};
    exPos[1]={x:10,y:20};
    exPos[2]={x:10,y:20};
    exPos[3]={x:10,y:20};*/

    setInterval(snake,90,snakeOb);
    area.addEventListener('keydown',function(e){moveIt(e,snakeOb)},true);


    function moveIt(e,snakeOb) {
        switch (e.keyCode) {
            case 38:
                if (snakeOb.move!='d' && snakeOb.move!='u') {
                  snakeOb.oldMove=snakeOb.move;
                    snakeOb.move='u';
                    //console.log(snakeOb.move);
                }
              
                break;
            
            case 37:
            if (snakeOb.move!='r'&& snakeOb.move!='l') {
                snakeOb.oldMove=snakeOb.move;
                  snakeOb.move='l';
                  //console.log(snakeOb.move);
              }
                break;
            case 39:
            if (snakeOb.move!='l' && snakeOb.move!='r') {
                snakeOb.oldMove=snakeOb.move;
                  snakeOb.move='r';
                  //console.log(snakeOb.move);
              }
                break;
            case 40:
            if (snakeOb.move!='u'&& snakeOb.move!='d') {
                snakeOb.oldMove=snakeOb.move;
                  snakeOb.move='d';
                  //console.log(snakeOb.move);
              }
                break;
        
            default:
                break;
        } 
    }


    function snake(s) {
        var a=document.getElementById('area');
        var crt = a.getContext('2d');
        //s.x=s.x +20;
        switch (s.move) {
            case 'u':
                if(s.y>0){s.y-=20;}
                else{s.y=700+20}
                break;
            
            case 'l':
                if(s.x>0){s.x-=20;}
                else{s.x=700+20}
                break;
            case 'r':
                if(s.x<700+20){s.x+=20;}
                else{s.x=-20}
                break;
            case 'd':
                if(s.y<700+20){s.y+=20;}
                else{s.y=-20}
                break;
        
            default:
                break;
        }
        if (food.x==snakeOb.x && food.y==snakeOb.y) {
            food.newFood();
        }

        crt.clearRect(0,0,a.width,a.height);
        crt.fillStyle='#500f02';
        /*for(i=s.lenght-1;i>0;i)
        {
            exPos[i-1]={x:exPos[i].x,y:exPos[i].y}
            crt.fillRect(exPos[i].x,exPos[i].y,20,20);
        }
        exPos[0].x=s.x;
        exPos[0].y=s.y;*/
        crt.fillRect(food.x,food.y,20,20);
        crt.fillStyle='#000000';
        crt.fillRect(s.x,s.y,20,20);
        
        //console.log(s.y);
    }


    
}