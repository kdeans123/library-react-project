import './index.css';
import React, { useEffect, useState } from 'react';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';


function App() {
  const [cart, setCart] = useState([]);  
  
  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}]);
  }

  function changeQuantity(book, quantity) {
      setCart(cart.map(item => {
        return item.id === book.id
            ? {
              ...item,
              quantity: +quantity,
            }
            : item;
        }));
    }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id));
  } 

  function numberOfItems() {
    let counter = 0; 
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
      console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books}/>}/>
        <Route 
          path="/books/:id" 
          render={() => (
            <BookInfo 
              books={books} 
                addToCart={addToCart}
                cart={cart} /> )}
                />
        <Route 
          path="/cart" 
          render={() => (
            <Cart 
              books={books} 
              cart={cart} 
              changeQuantity={changeQuantity}
              removeItem={removeItem} 
              />  
          )}
          />
        <Footer />
      </div>
    </Router>

  );
}

export default App;

// first import BrowserRouter and rename it as Router, then we need to wrap this app in a router
//  then we cut out what is not repeating (so we leave Nav, and Footer), and then we create new src folder and name it pages 
// and inside that folder we create Home.jsx and paste all the components there: Landing, highlights, featured, discounted, explore and wrap it in a fragment
//  we add <Route/> - route has a prop that it can pass, and it is called path (path of the component that we are going to pass) 
// and then we just need to pass the component: component={Home} 
// you want to add word "exact" so that the url matches only home page and not any other page that has slash forward 

// then we import books into our router, so lets create a new route
// we create a new route and we create a component, we will use render, becasue we want this component to know about the books, lets m=pass in component 
// and call it bookInfo and lets pass books to it
// Route path= cart:  it does need to know about the books so make sure you render it instead of component, because whenever you are pasisng props you need to use render 
// and there is an arrow function for it to work 

// by default it is an array 
// when do we want to add iten to the cart, when we click the button "Add to cart" and this button is in BookInfo, but we actually want the functionality to happen in this class 
// so we add the fucntion addToCoart, so how do we get the button to call this function 
// we add a property addToCart={addToCart}/> }/> line 26 and we pass in this function that we have here addToCart 
// now we go to BookInfo and accept it: const BookInfo = (books, addToCart) =>    - now this function is callable

// if you want o log it straigh away you want to use useEffect 
// in order for the "Add to cart " buttin adding additional books rather than removing and replacing the same book, we can use spread operator:   setCart([...cart, book])
// when we add more of the same book we do not want to see a row for each book, we want to see increased quantity
// 
// we iuse es6, we use spread operator, we take all the property from the book and instead we are adding quantity to it:
//   const dupeItem = cart.find(item => +item.id === +book.id)       if (dupeItem)         dupeItem.quantity += 1;
// and now we need to replace he first one 

// we are going to return the item with spread operatr, which allows us to add a new quantity:    return {  ...item,  quantity: item.quantity +1,
// setCart([...cart, {...book, quantity: 1}])  - the first operator is just creating a new array, the 2nd spread operator is including the title, id, image,... and then adding a quantity 

// how do we update quantity, we need to use spread operator and we add quantity to it 

//  we created a prop that whenever we call changeQuantity in this cart we gonna console log up there 

// if this is the book we are working with, update the quantity of that book:   setCart(cart.map(item => {        if (item.id === book.id) {
// and we take the quantity form the event: event.target.value 
// and simpler way to write it using ternany operator:   return item.id === book.id     ? {    ...item,   quantity: +quantity,}  : item;


// filter by the book id, keep it in the array if the ids do not match, and if they do match remove it from the array. when it is not equal to it, returns when it does not match 