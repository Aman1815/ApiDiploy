const exp = require("express");
const app = exp();

app.use(exp.json())

let arr=[
    {
        "id":1,
        "name":"Aman Kumar",
        "age":23
    },
    {
        "id":2,
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



app.put("/update/:id", (updateRequest, updateResponse) => {
    const id = updateRequest.params.id;
    const { name, age } = updateRequest.body;
    const indexid = arr.findIndex(i => i.id == id);
    if (indexid === -1) {
        console.log("user not found");
    }
    else {
        arr[indexid].name = name;
        arr[indexid].age = age;
        updateResponse.status(200).json({
            message: "user upadte Successfuly"
        })
    }
})

app.delete("/deletd/:id",(deletedRequest,deletedResponse)=>{
    const {id} = deletedRequest.params;
    const Indexid = arr.findIndex(i => i.id==id);
    if(Indexid == -1){
        return deletedResponse.json({
            Message:"Not Deleted"
        })
    }
    arr.splice(Indexid,1);
    return deletedResponse.json({
        Message:"Deleted Successful"
    })
})



app.listen(3000,()=>{
    console.log("Server Is Running Successfully")
})