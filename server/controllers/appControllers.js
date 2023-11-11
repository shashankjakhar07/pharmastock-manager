import Model from '../modal/UserModel.js'

// Post:- http://localhost:8080/sale
export const afterSale=async(req,res)=>{
    try {

        console.log(req.body);
        const {items}=req.body
        items.map(async(item)=>{
            const {medicineName}=item
            let it=await Model.findOne({medicineName})
            if(it)
                await Model.findByIdAndUpdate({_id:it._id},{quantity:it.quantity+item.quantity})
            else 
                await Model.create({...item})

        })

        res.status(201).json('Updated')

    } catch (error) {
        res.status(501).send('hello');
    }
}

// Get:- http://localhost:8080/getAllMedicines
export const getData=async(req,res)=>{
    try {
        const items=await Model.find({})
        res.status(201).json(items);
    } catch (error) {
        res.status(501).json({msg:"Didn't Get Data"})
    }
}

// Post:- http://localhost:8080/newOrder
export const newSupply=async(req,res)=>{
    try {
        
        const {items}=req.body

        items.map(async(item)=>{
            const {medicineName}=item
            let it=await Model.findOne({medicineName})
            if(it)
                await Model.findByIdAndUpdate({_id:it.id},{batch:it.batch+1,quantity:Number(it.quantity)+Number(item.quantity)})
            else 
            {
                item.batch=1;
                item.thresholdStock=item.quantity/2+1;
                await Model.create({...item})
            }
        })
        res.status(201).json({msg:'Updated'})

    } catch (error) {
        res.status(501).json({msg:"Didn't Update Inventory"})
    }
}

// Get:- http://localhost:8080/getNames
export const getNames=async(req,res)=>{

    try {
        let list=await Model.find({})

        list=list.map((item)=>{
            const {medicineName,rackNo,price}=item
            return {medicineName,rackNo,price}
        })

        res.status(201).json({list})

    } catch (error) {
        res.status(501).json({msg:error})
    }

}


// Get:- http://localhost:8080/getExpiredMed
export const getExpiredMed=async(req,res)=>{
    try {

        let list = await Model.find({})

        const currDate=new Date()

        list=list.filter((item)=>{
            return item.expiryDate>currDate
        })
        
        list=list.map((item)=>{
            item={...item.toObject()}
            const {price,...rest} = item;
            return rest
        })
        res.status(201).json({list})

    } catch (error) {
        res.status(501).json({msg:error})
    }
}


// Get:- http://localhost:8080/getLowStockMed
export const getLowStockMed=async(req,res)=>{
    try {
        let list=await Model.find({});
        list=list.map((item)=>{
            return {...item.toObject()}
        })
        res.status(201).send({list});

    } catch (error) {
        res.status(501).json({msg:error})
    }
}