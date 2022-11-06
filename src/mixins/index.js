export default function sometools(){
   
   const toConcatenate = (data) =>{
      let formatted = '';
      for (const it of data) {
          let v  = it + ' ';
         formatted += v;
      }
      return formatted;
   }
   const theDate = () =>{
       const date = new Date();
       let isStringDate = date.getFullYear();
       return isStringDate.toString();
   }
   const getLocal = (data) =>{
        if(localStorage.getItem(data)){
           return localStorage.getItem(data);
        }
        return null;
   }
   const setLocal = (key,data) =>  {
      localStorage.setItem(key,data);
   }
   return {
     toConcatenate,
     theDate,
     getLocal,
     setLocal
   }


}