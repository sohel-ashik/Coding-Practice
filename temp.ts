function bfsMaker(arr:number[][]):void{
    const map = new Map<number,number[]>();

    arr.forEach((item)=>{
        const [first,second] = item;
        map.get(first) ? map.get(first)?.push(second) : map.set(first,[second]);
        map.get(second) ? map.get(second)?.push(first) : map.set(second,[first]);
    })


    console.log(map);
}

bfsMaker([[0,1],[1,2],[2,0]])