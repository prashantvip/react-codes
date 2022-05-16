import React from "react";
import ReactDom from "react-dom";

import "./index.css"

function BookList(){
  return(
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}


const Book = () =>{
  return (
    <div className="book">
      <Image/>
      <Title/>
      <Author/>
    </div>
  )
}

const Image = () =>{
  return <img src="https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UY218_.jpg" alt="" />
}

const Title = () =>{
  return <h1>I Love You to the Moon And Back</h1>
}

const Author = () =>{
  return <h4>by Amelia Hepworth and Tim Warnes</h4>
}

ReactDom.render(<BookList/>,document.getElementById("root"));