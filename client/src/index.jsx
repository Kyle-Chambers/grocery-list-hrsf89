import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  addToList (qty, item) {
    qty = Number(qty);
    let listCopy = this.state.list.slice()
    let id = listCopy.length + 1;

    //console.log(item);

    listCopy.push({id: id, quantity: qty, description: item});
    
    this.setState({
      list: listCopy
    });
  }
  
  render () {
    return (
      <div>
        <AddGrocery addToList={this.addToList.bind(this)} />

        <GroceryList groceries={this.state.list}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));