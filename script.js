var btn = document.getElementById("btn")
var res = document.getElementById("res")
var btn2 = document.getElementById("btn2")

btn.addEventListener("mouseenter",botaoEmFuga)
btn.addEventListener("click", msg)
btn2.addEventListener("click", msg2)

function botaoEmFuga(){
	do{
		valorX = Math.ceil(Math.random()*800)
	}while(valorX > 350 & valorX < 650)
	do{	
		valorY = Math.ceil(Math.random()*800)
	}while(valorY > 60 & valorY < 360)
		
	btn.style.left = valorX+"px"
	btn.style.top = valorY+"px"
}

function msg(){
	alert("poxa cara")
}

function msg2(){
   alert("agora voce namora comigo<3")
  res.innerHTMl = "agora você namora comigo <3"
 }

//function msg (value.btn2)(){
  //alert("agora voce namora comigo")
//  