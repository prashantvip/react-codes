
// Default export

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

export default Book;