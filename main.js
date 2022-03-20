canvas = document.getElementById("c")
ctx = canvas.getContext("2d")

rh = 90
rw = 100
rx = 10
ry = 10

backgroundimg = "mars.jpg"
roverimg = "rover.png"

function add() {
    background_imgtag = new  Image()
    background_imgtag.onload = uploadbackground()
    background_imgtag.src = backgroundimg
    

   rover_imgtag = new Image()
   rover_imgtag.src = roverimg
   rover_imgtag.onload = ur()
}

function uploadbackground() {
    ctx.drawImage(background_imgtag , 0 , 0 , canvas.width , canvas.height)
}

function ur() {
   ctx.drawImage(rover_imgtag , rx , ry , rw , rh)
}