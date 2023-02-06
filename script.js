/** @type{HTMLCanvasElement} */ 
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const totalEnemies = 100
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
        this.x = Math.random() * canvas.width,
        this.y = Math.random()*canvas.height,
        this.width = 100,
        this.height = 100,
        this.speed = Math.random() * 4 - 2
    }
    update(){
        this.x+= this.speed
        this.y+= this.speed
    }
    draw(){
        ctx.strokeRect(this.x,this.y,this.width,this.height)

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
    requestAnimationFrame(animate)
}

animate()