import React from 'react';

const GroceryItem = (props) => (
  <div>
    <p> Qty: {props.item.quantity + ' ' + props.item.description} </p>
  </div>
)

export default GroceryItem;