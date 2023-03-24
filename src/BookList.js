import React from 'react'
import Book from './Book'
import Book2 from './Book2'
import Book3 from './Book3'

import './index.css'

const BookList = () => {
  return (
    <div className='booklist'>
      <Book />
      <Book2 />
      <Book3 />
    </div>
  )
}


export default BookList


