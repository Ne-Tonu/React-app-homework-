import React from 'react';


const Item = ({Item}) => {
  const { id, description, options, correct } = Item;
  return (
    <div className="item"> 
    <div className="description">
        {description}
    </div>

    <ul className="options">
        {
        options.map((option, index) => (
            <li key={index} className={index === correct ? 'correct' : ''}>
            {option}
            </li>
        ))}
      </ul>
    </div>
  );
};



export default Item;