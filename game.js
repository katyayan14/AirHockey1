class Game{
    constructor()
    {
      
    }
    getState()
    {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){gameState=data.val();})

    }
    update(state)
    {
        database.ref("/").update({
            gameState:state
        })
    }
    async start()
    {
        if(gameState===0)
        {
            player = new Player();
            var playerCountInfo = await database.ref("playerCount").once("value");
            if(playerCountInfo.exists())
            {       
                playerCount=playerCountInfo.val();
                player.getCount();
            }
            form = new Form();
            form.display();
            
        }
        p1 = createSprite(100,150);
        p1.addImage("Red",p1img)
        p1.scale = 0.5;
        p2 = createSprite(500,500);
        p2.addImage("Blue",p2img)
        p2.scale = 0.15;
        str = createSprite(700,450);
        str.addImage("Striker",strImg)
        str.scale = 0.5;
        p =[p1,p2];

    }
    play()
    {
        
        form.hide();
        text("Air Hockey",200,200);
        Player.getPlayerInfo();
        if(info!==undefined)
        {   
            background(0)
            image(table,0,0,displayWidth,displayHeight)
            var index = 0;
            var x = 0
            var y ;
            for(var i in info)
            {
                index +=1;
            //   x += displayWidth-100;
                x = x+200;
                y = displayHeight - info[i].distance;
                
                p[index-1].x = x;
                p[index-1].y = y;
                if(index===player.index)
                {   
                    p[index-1].shapeColor="red"; 
                    p[index-1].x = mouseX;
                    p[index-1].y = mouseY;
                }
            }
    
        }
        str.bounceOff(p1);
        str.bounceOff(p2);
        
        drawSprites();
        this.writePosition(p[index-1].x,p[index-1].y)
        this.writePos(p[index-1].x,p[index-1].y)
    }
    writePosition(x,y){
        database.ref('players/player').set({
          'x': position.x + x ,
          'y': position.y + y
        })
      }
     writePos(x,y){
        database.ref('players/player').set({
          'x': posi.x + x ,
          'y': posi.y + y
        })
     }
    readPosition(data){
        position = data.val();
        
        p[index-1].this.x = position.x;
        p[index-1].this.y = position.y;
      } 

    readPos(data){
        posi = data.val();
        
        p[index-1].this.x = posi.x;
        p[index-1].this.y = posi.y;
      } 


}