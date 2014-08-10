function startTimer()
{
	var time = new Date();
	startTime = time.getTime();
}

function timePassed()
{
	var time2 = new Date();
	nowTime = time2.getTime();
	Dtime = nowTime - startTime;
	return Dtime;
}