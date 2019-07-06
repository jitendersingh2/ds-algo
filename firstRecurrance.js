/**
** Find first recurring letter in a string
** ABCFABJ  => A
** If no recurrance or empty string => 'No Recurrance Found'
**/
function firsrtRecurringLetter(s) {
  if (s.length === 0) return "";
  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (s.substr(i).includes(char)) {
          return char;
      }
  }
}

function firsrtRecurringLetterOptimal(s) {
  const uniqueCharsMap = {};
  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (uniqueCharsMap[char]) return char;
      uniqueCharsMap[char] = 1;
  }
}

firsrtRecurringLetterOptimal('      ');