// complete the given function

function palindrome(str){
let startIndex= 0;
let endIndex = str.length;
	while(startIndex < endIndex){
		if(str[startIndex] != str[endIndex]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
