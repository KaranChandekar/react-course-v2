import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
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
