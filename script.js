// complete the given function

function palindrome(str){
let startIndex= 0;
let endIndex = str.length-1;
	while(startIndex < endIndex){
		if(str[startIndex] != str[endIndex]){
			return false;
		}
		startIndex++;
		endIndex--;
	}
	return true;
}
module.exports = palindrome
