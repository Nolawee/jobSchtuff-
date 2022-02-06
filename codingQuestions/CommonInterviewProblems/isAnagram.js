const isAnagram = (s1, s2) => {
    if(s1.length !== s2.length) return false;
    let freq1 = {};
    let freq2 = {};

   for(char of s1) {
       if(char in freq1) {
           freq1[char] += 1;
       } else {
           freq1[char] = 1;
       }
   }

   for(char of s2) {
        if(char in freq2) {
            freq2[char] += 1;
        } else {
            freq2[char] = 1;
        }
   }

   for (key in freq1) {
       if (!freq2[key] || freq1[key] !== freq2[key]) {
           return false;
       }
   }

   return true;

}

console.log(isAnagram('garden', 'nefrag'));