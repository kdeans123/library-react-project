import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
    return (
     <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>America's most awarded online library platform of all times</h1>
                    <h2>Find your dream book with <span className='purple'>Library</span></h2>
                    <Link to="#features">
                        <button className='btn'>Browse books</button>
                    </Link>
                </div>
                <figure className='header__img--wrapper'>
                    <img src={UndrawBooks} alt="" className='landing__img'/>
                </figure>
            </div>
        </header>

     </section>
    )
}


export default Landing;