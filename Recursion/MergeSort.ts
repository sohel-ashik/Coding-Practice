

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

function MergeSort(arr:number[]):number[] {

    if(arr.length === 1) return arr; // base case

    const left:number[] = MergeSort(arr.slice(0,arr.length/2)); // making the left array
    const right:number[] = MergeSort(arr.slice(arr.length/2)); //making the right array

    return mergeSortedArray(left,right); // returning the sorted array
}


console.log(MergeSort([41,32,324,1,-342,420134,-3245,-234,1234,2,1,23,5]))