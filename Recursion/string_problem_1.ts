// remove all the a from the string
// suppose "scdasdkksasdkb" => "scdsdkkssdkb"

function removing_a(str:string,res:string = '',i:number = 0):string{
    if(i===str.length) return res; // if the length is hit the most return
    if(str[i]!=='a') res+=str[i]; // filtering the 'a' char
    return removing_a(str,res,++i);
}


let str:string = "sadflkasdf lasdfbsa dfkasd flksa";

str = removing_a(str);
console.log(str);
