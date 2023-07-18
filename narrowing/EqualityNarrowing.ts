function printAll(x:string|number|string[] , y:string|boolean){
    if(x===y){
        // if x and y equal then their types also equal
        // string is common between x and y so string is the type of x and y
        x.toUpperCase()
        y.toUpperCase()
    }
}

// == and != that is looser equality 
interface Container {
    value: number ;
}

function multiply(container: Container, factor: number){
    // == null also checks for undefined as well and vice versa
    if(container.value!=null){
        console.log(container.value);
    }
}