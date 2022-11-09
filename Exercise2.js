const express = require('express');
const app = express()
const { getUser,dateTimefun }= require('./service/service')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//sending user 10 Record 
app.get('/v1/getalluser',async (req,res)=>{
try {
    
    async function getALLData(){
        let fetchObj = [];
        let data = await getUser() 
        let result = data.map((ele)=>{
             fetchObj.push({
             name:`${ele.name['title']}  ${ele.name['first']} ${ele.name['last']}`,
             DOB:`${dateTimefun( ele.dob['date'])}`  ,
             email: `${ele.email}` 
        })  
        })
        return fetchObj;
    }
    
    let getAllUserRecord = await getALLData()
    // console.log(getAllUserRecord);
    return res.status(200).send({message:'User data received successfully',lenght:getAllUserRecord.length,getAllUserRecord})
    
} catch (error) {
    console.log(error);
}

} )


 

//server listining 
let PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server listing on ${PORT}`);
} )