import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import { getInventoryListItems, addInventoryListItem } from './actions/inventoryItemsActions'
import InventoryList from './InventoryList'
import NewInventoryItem from './NewInventoryItem'

class App extends Component {
  constructor(){
    super()
    this.handleNew = this.handleNew.bind(this)
  }

  componentWillMount(){
    this.props.getInventoryListItems()
  }

  handleNew(event) {
    event.preventDefault()
    let newQuant = document.getElementById('new-item-quantity').value
    let newDescript = document.getElementById('new-item-description').value
    this.props.addInventoryListItem(newQuant, newDescript)
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <NewInventoryItem addFn={this.handleNew}/>
          <InventoryList inventoryItems={this.props.inventory.inventoryItems}/>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {inventory: state}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {getInventoryListItems: getInventoryListItems, addInventoryListItem: addInventoryListItem},
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
