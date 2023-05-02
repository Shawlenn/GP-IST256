import React from 'react';
import '../styles/Cards.css'
import CardItem from './CardItem';
import CardPic from '../assets/1.png';
import CardPic2 from '../assets/4.png';
import CardPic3 from '../assets/2.png';


function Cards() {
  return (
    <div className='wrapper'>
      <h2>Hot Products!!!</h2>
      
      <div className='card'>
        <div className='card__body'>
          <img src= {CardPic} class="card__image" />
          <h2 className='card__title'>Womens' Dress</h2>
          <p className='card__description'>Long Sleeve 
          dress for casual wear</p>
        </div>
        <button className='card__btn'>Shop Here</button>

      </div>

      <div className='card'>
        <div className='card__body'>
          <img src= {CardPic2} class="card__image" />
          <h2 className='card__title'>Womens' suit Pant</h2>
          <p className='card__description'>Suit Pant
           for casual wear</p>
        </div>
        <button className='card__btn'>Shop Here</button>

      </div>

      <div className='card'>
        <div className='card__body'>
          <img src= {CardPic3} class="card__image" />
          <h2 className='card__title'>Womens' Dress</h2>
          <p className='card__description'> 
          dress for casual wear</p>
        </div>
        <button className='card__btn'>Shop Here</button>

      </div>
    </div>
  );
}

export default Cards;