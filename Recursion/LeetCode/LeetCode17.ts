function letterCombinations(digits: string): string[] {
    const map = new Map<string,string>();
    map.set('2',"abc");
    map.set('3',"def");
    map.set('4',"ghi");
    map.set('5',"jkl");
    map.set('6',"mno");
    map.set('7',"pqrs");
    map.set('8',"tuv");
    map.set('9',"wxyz");

    const result:string[] = [];

    function gettingCombinations(index:number=0,res:string[] = []):void{
        if(index === digits.length){
            res.length && result.push(res.join(''));
            return;
        }

        const list:string|undefined = map.get(digits[index]);

        if(list){
            for(let i=0;i<list.length;i++){
                res.push(list[i]);
                gettingCombinations(index+1,res);
                res.pop();
            }
        }
    }

    gettingCombinations();

    return result;

};

console.log(letterCombinations(''))