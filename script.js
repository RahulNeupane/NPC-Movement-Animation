/** @type{HTMLCanvasElement} */ 
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const totalEnemies = 10
let gameFrame = 0
const enemyArray = []

canvas.height=760
canvas.width = 500

// enemy1 =  {
//     x:0,
//     y:0,
//     width:100,
//     height:100
// }

class Enemy {
    constructor(){
        this.image = new Image()
        this.image.src = 'enemy1.png'
        // this.speed = Math.random() * 4 - 2
        this.spriteWidth = 293
        this.spriteHeight = 155
        this.width = this.spriteWidth /2
        this.height = this.spriteHeight /2
        this.x = Math.random() * (canvas.width - this.width),
        this.y = Math.random()*(canvas.height - this.height),

        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update(){
        this.x+= Math.random() * 5 - 2.5
        this.y+= Math.random() * 5 - 2.5
        if(gameFrame%this.flapSpeed==0){
            this.frame>4 ? this.frame=0 : this.frame++
        }
    }
    draw(){
        ctx.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)

    }
}

for(i=0;i<totalEnemies;i++){
    enemyArray.push(new Enemy())
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    enemyArray.forEach(enemy=>{
        enemy.draw()
        enemy.update()
    })
    gameFrame++
    requestAnimationFrame(animate)
}

animate()