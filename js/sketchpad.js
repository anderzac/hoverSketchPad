var randomColor = false;

$(document).ready(function(){
	initializeGrid(16);
	$(document).on("mouseover", ".block", function(){
		$(this).addClass("colored");
		if (randomColor){
			var rgbColor = "rgb( " + randCol() + ", " + randCol() + ", " + randCol() + ")";
			$(this).css("background-color", rgbColor);
		}
    });
    $("button[name='clear']").click(function(){
        $(".block").remove();
        initializeGrid(16);
        randomColor = false;
    });
    $("button[name='custom']").click(function(){
        var newSize = prompt("What size? (Please keep it under 100)");
        $(".block").remove();
        initializeGrid(newSize);
    });
    $("button[name='random']").click(function(){
        $(".colored").removeClass("colored");
        randomColor = true;
    });
});

function initializeGrid(size){
	var blockSize = 640 / size;
	for (var i = 0; i < size*size; i++){
		$(".container").append("<div class='block' style='width: " + blockSize + "px; height: " + blockSize + "px;'></div>");
	}
}

function randCol(){
	return Math.ceil(Math.random() * 254);
}