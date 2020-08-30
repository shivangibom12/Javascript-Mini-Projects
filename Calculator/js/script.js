function clickMe(val) 
{ 
	document.getElementById("result").value += val;
} 

function clr() 
{ 
	document.getElementById("result").value = "";
} 

function eql() { 
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
} 

function closeMe()
{
	alert("Are you sure?");
    window.close();
}

function del() {
	let z = document.getElementById("result").value;
	let w = z/10;
}