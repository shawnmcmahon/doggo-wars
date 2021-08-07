import React from 'react';
import Dog from '../Dog/Dog'
import './LovedDogs.css';


const LovedDogs = ({pastDogs, handleLoveClick}) => {

  const allDogs = [...pastDogs];

  const allLovedDogs = allDogs.filter(currentDog => currentDog.isLoved)




  const mappedLovedDogs = allLovedDogs.map(currentDog => {
      return (
          <Dog dog={currentDog} key={currentDog.image} handleLoveClick={handleLoveClick} />
      )
  })

  
  return (
    <>
      <h2>Loved Dogs</h2>
      <section className="loved-dogs-container">
        {mappedLovedDogs}
      </section>
    </>
    )

}

export default LovedDogs;