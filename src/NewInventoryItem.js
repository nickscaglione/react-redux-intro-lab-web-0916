import React from 'react'

function NewInventoryItem(props){

  return(
    <div>
      <form onSubmit={props.addFn}>
        <label>Quantity</label>
        <input id="new-item-quantity" type="text"/>
        <label>Description</label>
        <input id="new-item-description" type="textarea"/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default NewInventoryItem
