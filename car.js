var run=setInterval(car,50);
margin=0;
function car(){
	if (margin==1700) {
		clearInterval(run);
		run=setInterval(car,50);
         margin=0;

	}
	else{
		margin+=5;
	
	
	var x=document.getElementById('policeCar');
	x.style.marginLeft=margin+"px";
	var z=document.getElementryById("audio");
	z.play();
    }
}
