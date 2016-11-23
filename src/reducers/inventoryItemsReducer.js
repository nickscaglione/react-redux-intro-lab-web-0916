export default function inventoryItemsReducer(state = [], action) {
  switch(action.type) {
    case 'GET_INVENTORY_LIST_ITEMS':
      return action.payload;
    case 'ADD_INVENTORY_LIST_ITEM':
      return [
        ...state,
        {quantity: action.payload.quantity, description: action.payload.description}
      ];
    default:
      return state;
  }
}
