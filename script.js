/** @type{HTMLCanvasElement} */ 
const canvas1 = document.querySelector('#canvas1')
const ctx1 = canvas1.getContext('2d')
const canvas2 = document.querySelector('#canvas2')
const ctx2 = canvas2.getContext('2d')
const totalEnemies = 10
let gameFrame = 0
const enemyArray1 = []
const enemyArray2 = []


canvas1.height= canvas2.height = 760
canvas1.width = canvas2.width = 450

// enemy1 =  {
//     x:0,
//     y:0,
//     width:100,
//     height:100
// }

class Enemy1 {
    constructor(){
        this.image = new Image()
        this.image.src = 'enemy1.png'
        this.spriteWidth = 293
        this.spriteHeight = 155
        this.width = this.spriteWidth /2
        this.height = this.spriteHeight /2
        this.x = Math.random() * (canvas1.width - this.width),
        this.y = Math.random()*(canvas1.height - this.height),

        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update1(){
        this.x+= Math.random() * 5 - 2.5
        this.y+= Math.random() * 5 - 2.5
        if(gameFrame%this.flapSpeed==0){
            this.frame>4 ? this.frame=0 : this.frame++
        }
    }
    draw1(){
        ctx1.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
    }
}
class Enemy2 {
    constructor(){
        this.image = new Image()
        this.image.src = 'enemy2.png'
        this.speed = Math.random() * 4 +1
        this.spriteWidth = 266
        this.spriteHeight = 188
        this.width = this.spriteWidth /2
        this.height = this.spriteHeight /2
        this.x = Math.random() * (canvas1.width - this.width),
        this.y = Math.random()*(canvas1.height - this.height),

        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.angle = 0
        this.angleSpeed = Math.random() * 0.2
        this.curve = Math.random() * 7
    }
    update2(){
        this.x -= this.speed
        this.y+= this.curve * Math.sin(this.angle)
        this.angle += this.angleSpeed
        if(this.x + this.width < 0 ) this.x = canvas2.width
        if(gameFrame%this.flapSpeed==0){
            this.frame>4 ? this.frame=0 : this.frame++
        }
    }
    draw2(){
        ctx2.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
    }
}

for(i=0;i<totalEnemies;i++){
    enemyArray1.push(new Enemy1())
    enemyArray2.push(new Enemy2())
}

function animate(){
    ctx1.clearRect(0,0,canvas1.width,canvas1.height)
    ctx2.clearRect(0,0,canvas1.width,canvas1.height)
    enemyArray1.forEach(enemy=>{
        enemy.draw1()
        enemy.update1()
    })
    enemyArray2.forEach(enemy=>{
        enemy.draw2()
        enemy.update2()
    })
    gameFrame++
    requestAnimationFrame(animate)
}

animate()