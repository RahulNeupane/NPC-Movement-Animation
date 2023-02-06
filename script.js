/** @type{HTMLCanvasElement} */ 
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.height=760
canvas.width = 500

enemy1 =  {
    x:0,
    y:0,
    width:100,
    height:100
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    enemy1.x++
    enemy1.y++

    ctx.fillRect(enemy1.x,enemy1.y,enemy1.width,enemy1.height)
    requestAnimationFrame(animate)
}

animate()