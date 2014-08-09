level = 10;
buttonAmount = level + 2;
hadButton = false;
addButton1 = "<button class = \"buttons\" type = \"button\">1</button>" //批量生成按钮的话只有使用html标签生成比较方便
addButton2 = $("<button></button>").addClass('buttons/')
			.attr("type","button")
			.text('1');
addButton3 = document.createElement("button");
BtnNum = 1 ;

$(document).ready(function() {
	buttonWidth = $("#middle").width() / buttonAmount - 2;
});

$(document).ready(function() {
	$("#control").click(function() {
		console.log("1");
		/* Act on the event */

		if(hadButton == false)
		{
			for(i=1 ; i <= level+2 ; i++)
			{
				for( i2=1 ; i2 <= level+2 ; i2++)
				{
					$("#middle").append(addButton1);
					$("button:last").text(BtnNum++);
					console.log("setting buttons")
				}
				$("#middle").append("<br />");
			}


			$(".buttons")

			.css({
				width: buttonWidth,
				height: buttonWidth
			})

			.each(function(index, el) 
			{
				$ranBtn = $(".buttons").eq(Math.floor(Math.random()*buttonAmount*buttonAmount))
				ranText = $ranBtn.text();
				$ranBtn.text($(this).text());
				$(this).text(ranText);
			})

			.click(function(event) {
				/* Act on the event */
				targetBtn = event.target ;
				$targetBtn = $(targetBtn);
				console.log("x in click!!!!");
				$targetBtn.fadeTo('fast', 0.00, function() {
					//此函数用于游戏完成时的检测
				}); //不使用fadeOut是为了保留占位。
				//hadButton = false;
			});

			console.log("css");
			hadButton = true;
		}
		else
		{
			alert("已经有按钮了！")
		}


		console.log("x setting!!");
		console.log($(".buttons"));


	});

});
