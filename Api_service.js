const exp = require("express");
const app = exp();

app.use(exp.json())

let arr=[
    {
        "name":"Aman Kumar",
        "age":23
    },
    {
       "name":"cash kumari",
        "age":30 
    }
]

app.get("/userData",(userRequest,userResponse)=>{
    userResponse.status(200).json(arr);
}) 


app.post("/userNewData",(newRequest,newresponse)=>{
    const newAdd = newRequest.body;
    arr.push(newAdd);
    newresponse.json(arr);
})



app.listen(3000,()=>{
    console.log("Server Is Running Successfully")
})