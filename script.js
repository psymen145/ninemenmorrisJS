var player = 1;
var phase1 = 0;

$(document).ready(function(){
	while(phase1 < 18){
		if(player === 1){
			$('.node').click(function(){
				$(this).toggleClass("pRed");
			})
			player = 2;
		}
		else{
			$('.node').click(function(){
				$(this).toggleClass("pBlue")
			})
			player = 1;
		}

		phase1++;
	}
});