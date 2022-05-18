import React from "react";
import ReactDom from "react-dom";

const books = [
     {
     author : "Amelia Hepworth",
     title : "I Love You to the Moon And Back",
     img : "https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UY218_.jpg"
},

 {
     author : "Hector Garcia",
     title : "Ikigai",
     img : "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
}

]




function BookList(){
    return(
        <section>
            {books.map((book) =>{
                // console.log(book);
                const {img,title,author} = book
                return <Book book={book}></Book>
            })}
        </section>
    )
}




const Book = (props) =>{
    console.log(props);
    const {img,title,author} = props.book
    return(
        <div>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </div>
    )
}

ReactDom.render(<BookList/>,document.getElementById("root"));