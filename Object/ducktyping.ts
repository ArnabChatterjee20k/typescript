function verify(data:{email:string,name:string}):void{
    // pass
}

// getting an error cause we are passing extra properties -> isPass
verify({email:"arnab",name:"arnba",isPass:true})

// weird behaviour due to duck typing
// not getting an error still are passing isPass
const user = {email:"arnab",name:"arnba",isPass:true}
verify(user)