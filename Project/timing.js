function startTimer()
{
	var time = new Date();
	startTime = time.getTime();
}

function timePassed()
{
	var time = new Date();
	nowTime = time.getTime();
	timePassed = nowTime - startTime;
	return timePassed;
}