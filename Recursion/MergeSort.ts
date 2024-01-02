

// sort two sorted array

function mergeSortedArray(arr1:number[], arr2:number[]): number[]{
    const sorted:number[] = []; //final sorted array

    while(arr1.length && arr2.length){
        if(arr1[0] < arr2[0]){
            sorted.push(arr1[0]);
            arr1.shift();
        } else{
            sorted.push(arr2[0]);
            arr2.shift();
        }
    }
    
    //pushing the remaining array
    if(arr1.length){
        arr1.forEach((item)=>sorted.push(item));
    } else {
        arr2.forEach((item)=>sorted.push(item));
    }

    return sorted;
}


const a = mergeSortedArray([1,33,53,223], [43,123,322]);

console.log(a);