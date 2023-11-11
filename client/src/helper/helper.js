import axios from 'axios'  

// make api request


export const updatDatabase=async(items)=>{
    try {
        return await axios.post('http://localhost:8080/sale',{items:items})
    } catch (error) {
        console.log(error);
    }
}

export const addToInventory=async(items)=>{
    try {
        return await axios.post('http://localhost:8080/newOrder',{items:items})
    } catch (error) {
        console.log(error);  
    }
}

export const getNames=async()=>{
    try {
        return await axios.get('http://localhost:8080/getNames')
    } catch (error) {
        console.log(error);
    }
}


export const getExpiredMed=async()=>{
    try {
        return await axios.get('http://localhost:8080/getExpiredMed')
    } catch (error) {
        console.log(error);
    }
}

export const getLowStockMed=async()=>{
    try {
        return await axios.get('http://localhost:8080/getLowStockMed')
    } catch (error) {
        console.log(error);
    }
}