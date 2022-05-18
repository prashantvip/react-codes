import React from "react";
import ReactDom from "react-dom";

import "./index.css"

function BookList(){
  return(
    <section className="booklist">
      <Book/>
    </section>
  )
}

const author = 'by Amelia Hepworth and Tim Warnes'
const Book = () =>{
  const title = 'I Love You to the Moon And Back'
  return (
    <div className="book">
      <img src="https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UY218_.jpg" alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{'hello'}</p>
    </div>
  )
}


ReactDom.render(<BookList/>,document.getElementById("root"));