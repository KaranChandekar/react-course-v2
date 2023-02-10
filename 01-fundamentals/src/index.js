import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    id: 1,
    title: `Little Blue Truck's Valentine`,
    author: 'Alice Schertle',
    img: './images/book-1.jpg',
  },
  {
    id: 2,
    title: `Atomic Habits`,
    author: 'James Clea',
    img: 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleformInput = () => {
    console.log('form input');
  };
  const handleButtonClick = () => {
    alert('button clicked');
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleformInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
