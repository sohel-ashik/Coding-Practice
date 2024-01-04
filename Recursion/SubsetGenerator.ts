
// given an distinct charecter string, make a subset for all those charecter


function subsetMaker(main:string[] = [],remain:string[] = []):void{
   if(remain.length === 0){
        console.log(main.join(''));
        return;
   }

   main.push(remain[0]);
   remain.shift();

   subsetMaker(main,remain);
   const ch = main.pop();

   subsetMaker(main,remain);
   remain.unshift(ch?ch:'')

}

const a = 'abc';
subsetMaker([],a.split(''));
