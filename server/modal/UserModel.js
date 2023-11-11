import mongoose from "mongoose";

const Scheme=new mongoose.Schema({
    medicineName:{
        type:String
    },
    quantity:{
        type:Number,
    },
    rackNo:{
        type: Number,
    },
    expiryDate:{
        type: Date,
    },
    batch:{
        type: Number,
    },
    thresholdStock:{
        type: Number,
    },
    vendor:{
        name:{
            type:String,
        },
        number:{
            type:Number,
        }
    },
    price:{
        cost:{
            type:Number,
        },
        selling:{
            type: Number
        }
    }
})

export default mongoose.model('structs',Scheme)