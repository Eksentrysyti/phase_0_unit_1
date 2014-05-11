//"I want to add a set of numbers together"
function sum(arr){
	return eval(arr.join('+'));
}

//"I want to take the average of a set of numbers"
function mean(arr){
	return sum(arr)/(arr.length);
}

//"I want to find the median number in a set of numbers"

function median(arr){

//Sort the array from smallest to largest
	arr = arr.sort(function(a, b) {
    return a-b;
  });

//Determine the middle element.  If odd elements in array, return middle element.  Else, return the average the two middle elements.
	var medianPlace = (arr.length+1)/2;
	if (arr.length % 2 !== 0){
		return arr[medianPlace];
	}
	else {
    	return (arr[Math.floor(medianPlace)] + arr[Math.ceil(medianPlace)]) / 2;
	}
}




// For example Testing:
// 
// console.log(sum([10, 20, 30]));                   // 60
// console.log(mean([18, 2, 60, 40]));               // 30
// console.log(median([1,3,5,7,8,1,3,5,7,8]));       // 6
// console.log(median([5, 6, 3, 4, 2, 5, 6]));       // 5
// 
// 
// 
// ArrOdd = [5, 6, 3, 4, 2, 5, 6]
// ArrEven = [1,3,5,7,8,1,3,5,7,8]
// function allProb(arr) {
// 		console.log(sum(arr));
// 		console.log(mean(arr));
// 		console.log(median(arr));
// }
// allProb(ArrEven);
// allProb(ArrOdd);





5
5



