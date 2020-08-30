function clock() {
	var refresh=1000; // Refresh rate in milli seconds
	mytime=setTimeout('clockTime()',refresh)
}

function clockTime() {
	var d = new Date()
	var n = d.toDateString();
	var hour = d.getHours()
	var minute = d.getMinutes()
	var second = d.getSeconds()
	
	var dayAndDate = d.toDateString()
//	var day = d.getUTCDay()
//	var date = d.getUTCDate()
//	var month = d.toLocaleString('default', { month: 'long' });
//	var year = d.getUTCFullYear()

	document.getElementById('date').innerHTML = dayAndDate;
//	document.getElementById('date').innerHTML = day + "  " + date + " - " + month + " - " + year;
	
	document.getElementById('hour').innerHTML = hour + '<span>hr</span>';
	document.getElementById('minute').innerHTML = minute + '<span>min</span>';
	document.getElementById('second').innerHTML = second + '<span>s</span>';
	clock();
}


	
	
	
	