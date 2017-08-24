function input(){

	var input = document.getElementById('input').value;
	var output = sum(input);
	document.getElementById('output').innerHTML= output;


}

function sum(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}
