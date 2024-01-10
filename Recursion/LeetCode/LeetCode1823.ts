function findTheWinner(n: number, k: number): number {
    const arr:number[] = [];
    for(let i=1;i<=n;i++) arr.push(i);
    
    function elemination(remaining:number[],current:number = 0):number{
        if(remaining.length == 1) return remaining[0];

        const eleminationIndex: number = (current+k-1) % remaining.length;
        remaining.splice(eleminationIndex,1);

        return elemination(remaining,eleminationIndex);
    }

    return elemination(arr);
};


console.log(findTheWinner(6,5))