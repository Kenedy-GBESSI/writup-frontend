import axiosClient from "../axios";
import { ref } from "vue"
import store from "../store";
export default function useBook(){


  const books = ref({});
  const book = ref({
    chapters: [
      {
        
      }
    ]
  });
  const chapters_book = ref({
    paragraphs : [
      {
        content: '',
        id: ''
      }
    ]
  })
   const getBooks = async () =>{
     let response = await axiosClient.get('/books');
     books.value = response.data.data;
     store.state.loading = false
   };
   const getBook = async (id) => {
      let response = await axiosClient.get('/books/'+id);
      book.value = response.data.data;
   }
   const download = async (data) => {
     let response = await axiosClient.post('/download',data);
     return response.data
   }
   const getChapters = async (id) => {
      let response = await axiosClient.get('/chapters/'+id)
      chapters_book.value = response.data.data;
   }
   return {
     getBooks,
     books,
     book,
     getBook,
     getChapters,
     chapters_book,
     download
   }


}