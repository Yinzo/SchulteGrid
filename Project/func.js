level = 1;
//window层事件注册


function initial()
{
	buttonAmount = level + 2;
	buttonWidth = $("#middle").width() / buttonAmount - 2;
	hadButton = false;
	BtnNum = 1 ;
	nowNum = 1 ;
}

function btnInit()
{
	console.log("按钮生成中")
		/* Act on the event */
		if(hadButton == false)
		{
			for(i=1 ; i <= level+2 ; i++)
			{
				for( i2=1 ; i2 <= level+2 ; i2++)
				{
					$("#middle").append(addButton1);
					$(".buttons:last").text(BtnNum++);
					console.log("setting buttons")
				}
				$("#middle").append("<br />");
			}
			$(this).hide();
			$("#window").slideUp(300);


			$(".buttons")
			.css({
				width: buttonWidth,
				height: buttonWidth,
				lineHeight: buttonWidth +'px'
			})
			.each(function(index, el) 
			{
				$ranBtn = $(".buttons").eq(Math.floor(Math.random()*buttonAmount*buttonAmount))
				ranText = $ranBtn.text();
				$ranBtn.text($(this).text());
				$(this).text(ranText);
			})
			.mouseover(function(event)  //按钮事件注册
			{ 
				/* Act on the event */
				targetBtn = event.target ;
				$targetBtn = $(targetBtn);			
				//hadButton = false;
				if($targetBtn.text() == nowNum)
				{
					$targetBtn.fadeTo(50, 0.00, function() {
						if(nowNum == buttonAmount*buttonAmount)
							{
								finish();
							}
						else
							{
								nowNum++;
							}

					//此callback用于游戏完成时的检测
					}); //不使用fadeOut是为了保留占位。	
				}
			});
			//按钮生成完毕
			hadButton = true;
		}
		else
		{
			alert("已经有按钮了！")
		}
}

function start()
{
	addButton1 = "<div class = \"buttons\" type = \"button\">1</div>" //批量生成按钮的话只有使用html标签生成比较方便
	addButton2 = $("<button></button>").addClass('buttons/')
				.attr("type","button")
				.text('1');
	addButton3 = document.createElement("button");
}

function finish()
{
	$("#window")

	.slideDown(300, function() {
		hadButton = false;
		$("#middle").empty();
		level++;
		initial();
	});

}


$(document).ready(function() {

	initial();
	start();
	$("#window").click(function(event) {
		/* Act on the event */
		start();
		btnInit();
		console.log('Window clicked');
	});

	$("#control").click(function() {
		btnInit();
	});

});