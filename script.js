// complete the given function

function palindrome(str1){
let startIndex= 0;
let str = str1.toLowerCase();
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
