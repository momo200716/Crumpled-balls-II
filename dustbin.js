class dustbin{
    constructor(x,y){
        var options= {
            'isStatic':true,
            'friction' : 1.0,
            'density': 1.0,
        }
        this.body = Bodies.rectangle(x,y,0,0,options);
        this.width = 0;
        this.height = 0;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
 
     }
     display(){
         imageMode(CENTER)
         image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
         this.width = 100
         this.height = 100
     }


 }