import React from 'react';
import Dog from '../Dog/Dog'
import './PastDogs.css'
import { NavLink } from 'react-router-dom';

const PastDogs = ({pastDogs, handleLoveClick}) => {


  const mappedPastDogs = pastDogs.map(currentDog => {
    return (
        <Dog dog={currentDog} handleLoveClick={handleLoveClick} />
    )
  })

  
  return (
    <section>
      <h2>Past Dogs</h2>
      {mappedPastDogs}
    </section>
  )

}

export default PastDogs;