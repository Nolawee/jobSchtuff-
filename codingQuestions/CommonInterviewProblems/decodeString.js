const numDecodings = (s) => {
    let decodeNum = 0;

    const numDecodingsHelper = (s) => {

        if(s.length == 0) decodeNum += 1;

        if(s.charAt(0) == '0') return;
        
        if(s.length >= 1) {
            const oneLetter = s.charAt(0);
            if(parseInt(oneLetter) <= 26) numDecodingsHelper(s.slice(oneLetter));
        }
        
        if(s.length >=2) {
            const twoLetters = s.charAt(0) + s.charAt(1);
            if(parseInt(twoLetters) <= 26) numDecodingsHelper(s.slice(twoLetters));
        }
        

    }

    numDecodingsHelper(s);

    return decodeNum;
}


console.log(numDecodings('')); //[2,2,6], [22,6], [2,26]; 3