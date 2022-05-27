import React from 'react';

const Menu = ({title,category,price,img,desc}) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>{desc}</p>
    </div>
  );
};

export default Menu;
