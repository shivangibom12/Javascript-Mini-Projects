const clickMe = () => {	
	let subject_1 = document.getElementById('subject-1').value;
	let subject_2 = document.getElementById('subject-2').value;
	let subject_3 = document.getElementById('subject-3').value;
	let subject_4 = document.getElementById('subject-4').value;
	let subject_5 = document.getElementById('subject-5').value;
	
	if (subject_1 >100 || subject_1 == "") {
		alert("Please Check your input and correct it");
	}
	else if(subject_2 >100 || subject_2 == ""){
		alert("Please Correct your input");
	}
	else if(subject_3 >100 || subject_3 == ""){
		alert("Please Correct your input");
	}
	else if(subject_4 >100 || subject_4 == ""){
		alert("Please Correct your input");
	}
	else if(subject_5 >100 || subject_5 == ""){
		alert("Please Correct your input");
	}
	else {
		let totalMarks = parseFloat(subject_1) + parseFloat(subject_2) + parseFloat(subject_3) + parseFloat(subject_4) + parseFloat(subject_5);	
		let percentage = totalMarks/5;	
		document.getElementById('showData').innerHTML = `Out of 500 the total is ${totalMarks} and percentage is ${percentage}%`;		
	}
}