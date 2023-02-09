import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL600_SR600,400_.jpg"
    alt=""
  />
)
const Title = () => <h2>Little Blue Truck's Valentine</h2>
const Author = () => <h4>Alice Schertle</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
