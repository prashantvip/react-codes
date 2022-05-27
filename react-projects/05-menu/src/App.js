import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [foods,setFoods] = useState(items);
  return (
    <div>
      {foods.map((food) => {
        return <Menu key={food.id} {...food}/>
      })}
    </div>
  );
}

export default App;
