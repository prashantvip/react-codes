import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
const [people,setPeople] = React.useState(data);

const removeItem = (id) =>{
    let newPeople = people.filter((person) => person.id !== id);
    console.log(newPeople);
    setPeople(newPeople);
}

  return (
    <>
      {people.map((person) => {
        // console.log(person);
        const {id,name} = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>Delete items</button>
    </>
  );
};

export default UseStateArray;
