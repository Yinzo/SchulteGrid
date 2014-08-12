//本文件调用了
//timing.js
//jQuery 1.11
//jQuery Mobile 1.43
//中的函数。

level = 1;
TTime = 0;
mode = "";
addButton1 = "<div class = \"buttons\" type = \"button\">1</div>" //批量生成按钮的话只有使用html标签生成比较方便
BtnMode = "start";
award = "";
playTimes = 0;
function initial()
{
	console.log("now calling initial");	
	buttonAmount = level + 2 ;
	buttonWidth = $("#middle").width() / buttonAmount - 2 ;
	hadButton = false ;
	BtnNum = 1 ;
	nowNum = 1 ;
	$("#num").text(nowNum) ;
}

function buttonAct(event)
{
	console.log("now calling buttonAct");
	targetBtn = event.target ;
	$targetBtn = $(targetBtn);
	if($targetBtn.text() == nowNum)
	{
		lastNumChecker();
		nowNum++;
		$targetBtn.fadeTo(0, 0.15);//不使用fadeOut是为了保留占位。	
		if(nowNum == buttonAmount*buttonAmount + 1)
		{
			if(mode == "l")
			{
				finish();
			}
			else if(mode == "c")
			{
				Cfinish();
			};
		}
		else
		{
			$("#num").text(nowNum);
		}
	}
}


function btnInit()
{
	console.log("now calling btnInit");
	console.log("BtnNum:"+BtnNum);
	console.log("按钮生成中")
		/* Act on the event */
		if(hadButton == false)
		{
			for(var i=1 ; i <= level+2 ; i++)
			{
				for(var i2=1 ; i2 <= level+2 ; i2++)
				{
					$("#middle").append(addButton1)
					$(".buttons:last")
					.text(BtnNum++);
					console.log("setting buttons")
				}
				$("#middle").append("<br />");
			}
			$(".buttons")
			.hide()
			.fadeIn(200,function()
			{
				startTimer();
				console.log("Timer started");
			})


			$(".buttons")
			.css(

			{
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
				//Act on the event 
				buttonAct(event);
			})

			// .on("tap",function(event)
			// {
			// 	buttonAct(event);
			// })

			.tap(function()
			{
				buttonAct(event);
			});

			//按钮生成完毕
			switch(level)
			{
				case 1:
					$(".buttons").css('fontSize', '3em');
					break;

				case 2:
					$(".buttons").css('fontSize', '3em');
					break;

				case 3:
					$(".buttons").css('fontSize', '2em');
					break;

				case 4:
					$(".buttons").css('fontSize', '2em');
					break;

				case 5:
					$(".buttons").css('fontSize', '1.6em');
					break;

				default :
					$(".buttons").css('fontSize', '1em');
					break;
			}
			hadButton = true;
		}
		else
		{
			alert("已经有按钮了！")
		}
}

function start()
{
	console.log("now calling start");
	addButton2 = $("<button></button>").addClass('buttons/')
				.attr("type","button")
				.text('1');
	addButton3 = document.createElement("button");
}

function finish()
{
	playTimes++;
	console.log("now calling finish");
	hadButton = false;
	DTime = timePassed() / 1000;
	TTime += DTime;
	var outPut1 = "本关耗时" + DTime.toFixed(2) + "秒";
	var outPut2 = "总耗时" + TTime.toFixed(2) + "秒";
	$("#text1").text(outPut1);
	$("#text2").text(outPut2);
	if(level < 5)
	{
		$("#window")
		.slideDown(300, function() 
		{
			$("#middle").empty();
			if(level < 5)
			{
				level++;
			}
			initial();

			if(playTimes == 1)
			{
				$("#window")	//窗口出现后才绑定点击，避免误触
				.on("tap",function(event) 
				{
					/* Act on the event */
					console.log('Window clicked');
					btnInit();
					changeTalks();
					$("#control").text("Start").css('backgroundColor', 'rgba(202, 234, 255, 1)');
					BtnMode = start;
					$(this).slideUp('fast');
				});
			}


		});

		if (mode == "l") 
		{
			levelTalks();
		}
		else if (mode == "c")
		{
			challangeTalks();
		};

	}
	else
	{
		level = 1;
		initial();
		$("#middle").empty();

		//////////////////////////////////////
		//////////////成就代码/////////////////
		if(TTime <= 90)
		{
			award = "加藤鹰之手";
		}
		else if (TTime > 90 && TTime <= 130)
		{
			award = "神之右手";
		}
		else if (TTime > 130 && TTime <= 160)
		{
			award = "黄金右手";
		}
		else if (TTime > 160 && TTime <= 210)
		{
			award = "眼疾手快";
		}
		else if (TTime > 210)
		{
			award = "我睡着了";
		};

		//////////////////////////////////////
		sWords = "你以" + TTime.toFixed(2) + "秒通关了闯关模式！获得了" + award + "的称号！"
		$("#sDetail").text(sWords);
		$("#success").slideDown('1500');
	}
}

function Cfinish()
{
	playTimes++;
	console.log("now calling Cfinish");
	hadButton = false;
	DTime = timePassed() / 1000;
	TTime = DTime;
	switch(level)
	{
		case 1:
			if(DTime <= 3.5)
			{
				award = "加藤鹰之手";
			}
			else if (DTime > 3.5 && DTime <= 4.5)
			{
				award = "神之右手";
			}
			else if (DTime > 4.5 && DTime <= 7.0)
			{
				award = "黄金右手";
			}
			else if (DTime > 7.0 && DTime <= 9.0)
			{
				award = "眼疾手快";
			}
			else if (DTime > 9.0)
			{
				award = "我睡着了";
			};
			break;

		case 2:
			if(TTime <= 5.5)
			{
				award = "加藤鹰之手";
			}
			else if (TTime > 5.5 && TTime <= 7.5)
			{
				award = "神之右手";
			}
			else if (TTime > 7.5 && TTime <= 9.5)
			{
				award = "黄金右手";
			}
			else if (TTime > 9.5 && TTime <= 12)
			{
				award = "眼疾手快";
			}
			else if (TTime > 12)
			{
				award = "我睡着了";
			};
			break;

		case 3:

			if(TTime <= 13)
			{
				award = "加藤鹰之手";
			}
			else if (TTime > 13 && TTime <= 16)
			{
				award = "神之右手";
			}
			else if (TTime > 16 && TTime <= 20)
			{
				award = "黄金右手";
			}
			else if (TTime > 20 && TTime <= 30)
			{
				award = "眼疾手快";
			}
			else if (TTime > 30)
			{
				award = "我睡着了";
			};
			break;

		case 4:

			if(TTime <= 26)
			{
				award = "加藤鹰之手";
			}
			else if (TTime > 26 && TTime <= 32)
			{
				award = "神之右手";
			}
			else if (TTime > 32 && TTime <= 40)
			{
				award = "黄金右手";
			}
			else if (TTime > 40 && TTime <= 60)
			{
				award = "眼疾手快";
			}
			else if (TTime > 60)
			{
				award = "我睡着了";
			};
			break;

		case 5:

			if(TTime <= 55)
			{
				award = "加藤鹰之手";
			}
			else if (TTime > 55 && TTime <= 65)
			{
				award = "神之右手";
			}
			else if (TTime > 65 && TTime <= 75)
			{
				award = "黄金右手";
			}
			else if (TTime > 75 && TTime <= 90)
			{
				award = "眼疾手快";
			}
			else if (TTime > 90)
			{
				award = "我睡着了";
			};
			break;

		default :
			award = "眼疾手快";
			break;
	}
	var outPut1 = "我以" + DTime.toFixed(2) + "秒通过了挑战模式中第"+level+"级！";
	var outPut2 = "获得了" + award + "的称号！"
	$("#sDetail").text(outPut1+outPut2);
	initial();
	$("#success").slideDown(1000, function() 
	{
		$("#middle").empty();
	});
	// $("#window")
	// .slideDown(300, function() 
	// {
	// 	$("#middle").empty();
	// 	BtnMode = "share";
	// 	$("#control")
	// 	.text("分享成绩！")
	// 	.css('backgroundColor', 'rgba(102,255,212,1)');

	// 	if(playTimes == 1)
	// 	{
	// 		$("#window")	//窗口出现后才绑定点击，避免误触
	// 		.on("tap",function(event) 
	// 		{
	// 			/* Act on the event */
	// 			console.log('Window clicked');
	// 			btnInit();
	// 			changeTalks();
	// 			$("#control").text("Start").css('backgroundColor', 'rgba(202, 234, 255, 1)');
	// 			BtnMode = start;
	// 			$(this).slideUp('fast');
	// 		});
	// 	}

	// });
	if (mode == "l") 
	{
		levelTalks();
	}
	else if (mode == "c")
	{
		challangeTalks();
	};


}

function lastNumChecker()
{
	console.log("now calling lastNumChecker");
	for(i = nowNum; i>0; i--)
	{
		$(".buttons").each(function(index, el) 
		{
			if($(this).text() == i)
			{
				$(this).fadeTo(50, 0.15);
			}
		});
	}
}

function changeTalks()
{
	console.log("now calling changeTalks");
	if (mode == "l") 
	{
		levelTalks();
	}
	else if (mode == "c")
	{
		challangeTalks();
	};
}

function levelTalks()
{
	console.log("now calling levelTalks");
	$level = $("#level");
	$words = $("#words");
	nextLevel = "闯关模式		第" + level + "关";
	switch(level)
	{
		case 1:
		$words.text("这仅仅是开始");
		break;

		case 2:
		$words.text("继续先放松一下");
		break;

		case 3:
		$words.text("慢慢开始有点难了");
		break;

		case 4:
		$words.text("不要被吓到哦");
		break;

		case 5:
		$words.text("你就快通关啦，耐心点就能过哟");
		break;

		case 6:
		$words.text("最后一关哈哈哈哈哈哈");
		break;

		default:
		$words.text("你开挂了吧喂！");
		break;

	}
	$level.text(nextLevel);

}

function challangeTalks() 
{
	console.log("now calling challangeTalks");
	$level = $("#level");
	$words = $("#words");
	nextLevel = "循环挑战模式		第" + level + "关";
	$level.text(nextLevel);
	$words.text("尽可能快地解决！");
	$("#continue").text("点击窗口继续");
}

$(document).ready(function() {

	initial();


	$("#control").on("tap",function()
	{
		// if(BtnMode == "start")
		// {
			// if(mode == "")
			// {
			// 	return false;
			// }
			btnInit();
			changeTalks();
		// };
		// if(BtnMode == "share")
		// {
		// 	alert("点击右上角分享到朋友圈~");
		// 	document.title = "我以" + DTime.toFixed(2) + "秒通过了挑战模式中第"+level+"级！获得了" + award + "的称号！"
		// }
	});

	$("#challange").on("tap",function()
	{
		mode = "c";
		$("#selection").slideUp('fast');
		$("#selectLevel").slideDown('400',function()
			{
				$(".levelSlt").on("tap",function(event)
				{
					$targetLevel = $(event.target);
					level = parseInt($targetLevel.attr("id"));
					$("#selectLevel").slideUp('fast');
					initial();
				});
			});
		$("#level").text("循环挑战模式");
		$("#words").text("点击Start开始");
	});

	$("#toLevel").on("tap",function()
	{
		mode = "l";
		$("#selection").slideUp('fast');
		$("#level").text("闯关模式");
		$("#words").text("点击Start开始");
	});

	$("#sShareBtn").on("tap",function()
	{
		alert("现在请点击右上角分享到朋友圈~");
		document.title = "我以" + TTime.toFixed(2) + "秒通过了舒尔特闯关模式！获得了" + award + "的称号！"
	});

	$("#sReplayBtn").on("tap",function()
	{
		TTime = 0;
		award = "";
		changeTalks();
		$("#success").slideUp('fast');
		$("#selection").slideDown('fast');
	})


});
