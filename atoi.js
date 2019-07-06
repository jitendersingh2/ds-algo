var myAtoi = function(str) {
	// Find index of first none whitespace character,
	// Then specify 32bit range
    let fan = [...str].findIndex(char => char.match(/\S/g)),
        range = [(2**31) - 1, -(2**31)],
        val = '';
    
	// If first alpha numeric char is found,
	// and if that char is +,- or a digit, 
	// add to val
    if(str[fan] && str[fan].match(/[+-\d]/g)) val += str[fan];
    
	// Increment to grab following chars
    let i = fan + 1;
    
	// Keep adding characters as long as there is a character to grab,
	// and while the character is a digit
    while(val && str[i] && str[i].match(/\d/g)) {
        val += str[i];
        i++;
    }
    
	// Ensure that there are digits in val
	// Necessary for "+", "-" and "." test cases
    val = val.match(/\d/g) ? val : 0;

	
	// Enforce 32bit range
    return Number(val > range[0] ? range[0] : (val < range[1] ? range[1] : val));
};