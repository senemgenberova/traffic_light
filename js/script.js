var circle = document.getElementsByClassName("circle");
		circle[0].style.background = "red";

		var time1 = setTimeout(function() {
			for(var i=0;i<circle.length;i++){
				if(i == 1){
					circle[i].style.background = "yellow";
				}
				else{
					circle[i].style.background = "black";
				}
			}
		}, 5000);

		var time2 = setTimeout(function(){
			for(var i=0;i<circle.length;i++){
				if(i == 2){
					circle[i].style.background = "green";
				}
				else{
					circle[i].style.background = "black";
				}
			}
		}, 7000);

		var time3 = setTimeout(function(){
			circle[2].style.background = "black";
		},12000);
