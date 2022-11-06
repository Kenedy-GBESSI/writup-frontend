import axios from "axios"
import { ref } from "vue"
export default function useBook(){


  const books = ref([]);
   const getBooks = async () =>{
     let response = await axios.get('http://127.0.0.1:8000/api/books');
     books.value = response.data.data;   
   }
   return {
     getBooks,
     books
   }


}