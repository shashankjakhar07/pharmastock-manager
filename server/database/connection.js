import mongoose from "mongoose";


const connection=()=>{
    const url='mongodb://localhost:27017/mims'
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
    console.log('Connected to DataBase')
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default connection