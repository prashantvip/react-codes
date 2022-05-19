import React from "react";
import ReactDom  from "react-dom";

import {books} from './books';

import Book from "./Book";

function BookList(){
  return(
    <section>
      {books.map((book) =>{
         return <Book key={book.id} {...book}></Book>  //book = {book}
      })}
    </section>
  )
}





ReactDom.render(<BookList/>,document.getElementById("root"));