function calcAvg(){
	var string = document.getElementById('numbers').value;
	var  array = string.split(',');
	var sum = 0;
	for (index = 0; index < array.length; ++index) {
		var myx = parseFloat(array[index]);
		if(isNaN(myx )){
			alert(myx + ' is not a number. Please enter comma separated numbers only.');
			return false;
		}
		sum = sum + myx ; 
	}
	var avrg = sum / array.length; 
	var result = document.getElementById('result').value;
	var msg = '';
	if(avrg == parseFloat(result) ){
		msg = 'Correct!';
	}else{
		msg = 'Incorrect, the  average is ' + avrg + '.'; 
	}
	document.getElementById('answer').innerHTML = msg ;
}