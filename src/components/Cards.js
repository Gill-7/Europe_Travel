import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className="cards__items">
                        <CardItem 
                            src="images/europe.jpg"
                            text="Explore the beauty of Europe"
                            label="Adventure"
                            path="/services" 
                        />
                        <CardItem 
                            src="images/europe2.jpg"
                            text="Europe streets with sunsets"
                            label="Explore Time"
                            path="/services" 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/europe3.jpg"
                            text="Meet with new People"
                            label="City View"
                            path="/services" 
                        />
                        <CardItem 
                            src="images/europe4.jpg"
                            text="Night time in France"
                            label="Night"
                            path="/destinations" 
                        />
                        <CardItem 
                            src="images/europe5.jpg"
                            text="Morning walks in small village"
                            label="Nature"
                            path="/sign-up" 
                        />
                    </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;


