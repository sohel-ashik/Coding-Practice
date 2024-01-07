// a string is given, make all the permutation

function permutation(processed:string[],main:string[]):void{

    // when the main's length will be 0 the string will be printed
    if(main.length === 0){
        console.log(processed.join(''));
        return;
    }

    let ch:string|undefined = main.shift(); // deleting the first char from the main

    for(let i=0;i<=processed.length;i++){
        ch && processed.splice(i,0,ch); // placing the first char of main to various position
        permutation(processed,main); // recursion is called
        processed.splice(i,1); // cleared the previous setted position
    }

    ch && main.unshift(ch); // put back the first char which was taken from main

}

permutation([],"abc".split(''))