
// given an distinct charecter string, make a subset for all those charecter

const res:string[] = []

function subsetMaker(main:string[] = [],remain:string[] = []):void{
   if(remain.length === 0){
        res.push(main.join(''))
        return;
   }

   main.push(remain[0]);
   remain.shift();

   subsetMaker(main,remain);
   const ch = main.pop();

   subsetMaker(main,remain);
   remain.unshift(ch?ch:'')

}

const a = 'abcd';
subsetMaker([],a.split(''));
console.log(res);