import axios from 'axios';



export const getalldata=async ()=>{
    try{
       return await axios.get(`https://silly-goat-fatigues.cyclic.app/label`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}
export const getalldata2=async ()=>{
    try{
       return await axios.get(`https://odd-jade-llama-wrap.cyclic.app/flatdata`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}