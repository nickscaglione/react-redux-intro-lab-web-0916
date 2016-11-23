import React from 'react'

function InventoryList(props){
  let items = props.inventoryItems.map((item, index) => {
    return(
      <li key={index}>item: {item.description}, quantity: {item.quantity}</li>
    )
  })

  return(
    <div>
      {items}
    </div>
  )
}

export default InventoryList
