import React from 'react';
import { books } from '../data'
import Book from "./ui/Book";

const Discounted = () => {
  return (
    <div>
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discounted <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {books
                        .filter(book => book.salePrice > 0 )
                        .slice(0, 8)
                        .map(book => <Book book={book} key={book.id} /> )}

                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Discounted;


// we want to show books that are on the sale, so their sale price is not equal null 
// to show books that are on sale we will use filter property, it checks and if it is true then it returns every element that is true. 
// so we want to show the book if the sale price > 0. but we only want first 8 books so we do .slide(0, 8)
// in js we can add these function like that onto each other 
// and then map over each element of this array and turn each element into this html tag 
