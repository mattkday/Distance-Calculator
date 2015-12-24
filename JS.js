$("#button").click(function() {    
    		var speed = $("#speed").val(); //get speed
			var time = $("#time").val();  //get time
    		var distance = speed * time;  //get distance

			$("#answer").html("You traveled a distance of " + distance + " miles.");
		}
)
