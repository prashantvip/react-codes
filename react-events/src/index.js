import React from "react";
import ReactDom  from "react-dom";

const books = [
  {
    id:1,
    img:"https://images-eu.ssl-images-amazon.com/images/I/71Bz8NshEVL._AC._SR360,460.jpg",
    title:"the silent patient",
    author:"ALex Michadelies"
  },
  {
    id:2,
    img:"https://images-eu.ssl-images-amazon.com/images/I/91Bx8Fqx1pL._AC._SR360,460.jpg",
    title:"Inferno",
    author:"Dan Brown"
  },
  {
    id:3,
    img:"https://m.media-amazon.com/images/I/81X0yPyjttL._AC_UL320_.jpg",
    title:"one small mistake",
    author:"Dandy Smith"
  }
]
function BookList(){
  return(
    <section>
      {books.map((book) =>{
         return <Book key={book.id} {...book}></Book>  //book = {book}
      })}
    </section>
  )
}


const Book = (props) =>{
  // console.log(props);
  const {img,title,author} = props //props.book when book={book}

  const clickHandler =() => {
    alert("hello world")
  }
  

  const complexExample = (author) =>{
    console.log(author)
  }

  return(
    <div>
      <img src={img} alt=""/>
      <h1 onClick={() =>console.log(title)}>{title}</h1>
      <h2>{author}</h2>
      <button type="button" onClick={clickHandler}>reference example</button>
      <button type="button" onClick={() => complexExample(author)}>complex example</button>
    </div>
  )
}



ReactDom.render(<BookList/>,document.getElementById("root"));