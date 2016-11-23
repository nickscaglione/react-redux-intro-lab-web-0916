export function getInventoryListItems() {
  return {
    type: 'GET_INVENTORY_LIST_ITEMS',
    payload: [
      {quantity: '3lbs', description: "flour"},
      {quantity: "2 dozen", description: "eggs"},
      {quantity: '2lbs', description: "sugar"}
    ]
  }
}

export function addInventoryListItem(quantity, description) {
  return {
    type: 'ADD_INVENTORY_LIST_ITEM',
    payload: {quantity: quantity, description: description}
  }
}
