/** @type{HTMLCanvasElement} */ 
const canvas1 = document.querySelector('#canvas1')
const ctx1 = canvas1.getContext('2d')
const canvas2 = document.querySelector('#canvas2')
const ctx2 = canvas2.getContext('2d')
const canvas3 = document.querySelector('#canvas3')
const ctx3 = canvas3.getContext('2d')
const canvas4 = document.querySelector('#canvas4')
const ctx4 = canvas4.getContext('2d')
const totalEnemies = 10
let gameFrame = 0
const enemyArray1 = []
const enemyArray2 = []
const enemyArray3 = []
const enemyArray4 = []


canvas1.width = canvas2.width = canvas3.width = canvas4.width =  450
canvas1.height= canvas2.height = canvas3.height = canvas4.height = 760

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
        this.width = this.spriteWidth / 4
        this.height = this.spriteHeight / 4 
        this.x = Math.random() * (canvas1.width - this.width)
        this.y = Math.random()*(canvas1.height - this.height)

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
        this.width = this.spriteWidth / 4
        this.height = this.spriteHeight / 4
        this.x = Math.random() * (canvas2.width - this.width)
        this.y = Math.random()*(canvas2.height - this.height)

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

class Enemy3 {
    constructor(){
        this.image = new Image()
        this.image.src = 'enemy3.png'
        this.speed = Math.random() * 4 +1
        this.spriteWidth = 218
        this.spriteHeight = 177
        this.width = this.spriteWidth / 4
        this.height = this.spriteHeight / 4
        this.x = Math.random() * (canvas3.width - this.width)
        this.y = Math.random()*(canvas3.height - this.height)
        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.angle = 0
        this.angleSpeed = Math.random() * 1.5 + 0.5 //defines speed of movement
        // this.curve = Math.random() * 70 + 50 //defines radius of movement
    }
    update3(){
        this.x = canvas3.width/2 * Math.sin(this.angle * Math.PI/90) + (canvas3.width/2  - this.width/2)
        this.y = canvas3.height/2 * Math.cos(this.angle * Math.PI/270) + (canvas3.height/2  - this.height/2)
        this.angle += this.angleSpeed
        if(this.x + this.width < 0 ) this.x = canvas3.width
        if(gameFrame%this.flapSpeed==0){
            this.frame>4 ? this.frame=0 : this.frame++
        }
    }
    draw3(){
        ctx3.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
    }
}

class Enemy4 {
    constructor(){
        this.image = new Image()
        this.image.src = 'enemy4.png'
        this.speed = Math.random() * 4 +1
        this.spriteWidth = 213
        this.spriteHeight = 213
        this.width = this.spriteWidth / 4
        this.height = this.spriteHeight / 4
        this.x = Math.random() * (canvas4.width - this.width)
        this.y = Math.random()*(canvas4.height - this.height)
        this.newX = Math.random() * canvas4.width 
        this.newY = Math.random()*canvas4.height 
        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.interval = Math.floor(Math.random() * 200 + 50)
    }
    update4(){
        if(gameFrame % this.interval === 0){
            this.newX = Math.random() * (canvas4.width - this.width)
            this.newY = Math.random()*(canvas4.height - this.height)
        }
        let dx = this.x - this.newX
        let dy = this.y - this.newY
        this.x -= dx/30
        this.y -= dy/30

        if(this.x + this.width < 0 ) this.x = canvas4.width
        if(gameFrame%this.flapSpeed==0){
            this.frame>4 ? this.frame=0 : this.frame++
        }
    }
    draw4(){
        ctx4.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
    }
}

for(i=0;i<totalEnemies;i++){
    enemyArray1.push(new Enemy1())
    enemyArray2.push(new Enemy2())
    enemyArray3.push(new Enemy3())
    enemyArray4.push(new Enemy4())
}

function animate(){
    ctx1.clearRect(0,0,canvas1.width,canvas1.height)
    ctx2.clearRect(0,0,canvas2.width,canvas2.height)
    ctx3.clearRect(0,0,canvas3.width,canvas3.height)
    ctx4.clearRect(0,0,canvas4.width,canvas4.height)
    enemyArray1.forEach(enemy=>{
        enemy.draw1()
        enemy.update1()
    })
    enemyArray2.forEach(enemy=>{
        enemy.draw2()
        enemy.update2()
    })
    enemyArray3.forEach(enemy=>{
        enemy.draw3()
        enemy.update3()
    })
    enemyArray4.forEach(enemy=>{
        enemy.draw4()
        enemy.update4()
    })
    gameFrame++
    requestAnimationFrame(animate)
}

animate()