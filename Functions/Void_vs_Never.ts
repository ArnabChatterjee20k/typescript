function handleError(msg: string): never {
    throw new Error(msg);
}

function doNothing():void{
    
}

function log(msg:string):void{
    console.log(msg);
}