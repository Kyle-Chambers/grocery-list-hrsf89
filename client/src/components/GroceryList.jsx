import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (

  <div className="groceries">
    {props.groceries.map( (item, index) => {
      return (
        <GroceryItem 
          item={item}
          key={index}
        />
      );
    })}
  </div>
)

export default GroceryList;