const substrings = (n) => {
    const arr = [];
    n.split("").forEach((d, i) => {
        
        console.log(d)
        if(i === 0) arr[i] = Number(d)
        else {
            console.log('arr of i '+ arr[i] + ' i is '+ i)
            if(arr.length > 1) console.log('arr of i-1 '+arr[i - 1])
            arr[i] = ((i + 1) * Number(d) + 10 * arr[i - 1]) % (Math.pow(10, 9) + 7)

            // arr[i] = ((i + 1) * Number(d) + 10 * arr[i - 1]) % (Math.pow(10, 9) + 7)
        }
    })

    return arr.reduce((a, b) => a+b) % (Math.pow(10,9)+7)
}

console.log(substrings("123"))