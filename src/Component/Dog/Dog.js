import React from 'react';
import './Dog.css';

const Dog = ({dog, handleLoveClick}) => {

  return (
    <>
      <article className="dog-box">
          <img src={dog.image} 
          className="dog" alt="past dog" />
          <button className={ dog.isLoved ?"love-button-true" : "love-button-false" } onClick={(event) => handleLoveClick(event, dog)}></button>
          <p> {dog.breed}</p>
          <p> {dog.roundsWon}</p>
      </article>
    </>
  )
}

export default Dog;