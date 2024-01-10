function isPowerOfFour(n: number): boolean {
    if(n===4 || n===1) return true;
    if(n<4) return false;

    return isPowerOfFour(n/4);
};

console.log(isPowerOfFour(16));