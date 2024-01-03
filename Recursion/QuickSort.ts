


//this a inplace quick sort implementation

function pertition(arr:number[],start:number, end:number):number{

    //i starting from the one step before the start and j is moving one step below the end
    let i:number = start-1;
    let j:number = start;
    const pivot: number = arr[end]; // the last one is the pivot here

    function swap(first:number,last:number){
        const temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
    }

    while(j<end){
        if(arr[j] > pivot) j++;
        else {
            i++;
            //swaping the i,j
            swap(i,j);
            j++;
        }
    }


    //this is for placing the pivot the accurate place. a bubble algo is implemented
    for(let x=end; x>i+1; x--){
        swap(x,x-1);
    }

    //returning the index of the placed pivot
    return i+1;
}


function QuickSort(arr:number[],start:number = 0,end:number = arr.length-1):void{
    if(start > end ) return; // if the start is greater than end return

    const pivot_index: number = pertition(arr,start,end); //getting the index of the placed pivot

    QuickSort(arr,start,pivot_index-1); // recurtion of the left segment.
    QuickSort(arr,pivot_index+1,end) // recurtion of the right segment.
}


const a:number[] = [];
QuickSort(a);

console.log(a);
