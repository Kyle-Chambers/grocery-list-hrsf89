import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formValues: {}
    }
  }

  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;
    this.setState({formValues});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();;
  }


  render () {

    return (
      
      <form onSubmit={this.handleSubmit}>

        <label>
          Quantity:
            <input 
              type="number" 
              name="qty"
              value={this.state.qty}
              onChange={this.handleChange.bind(this)}
            />
        </label>

        <br></br>

        <label>
          Item:
            <input 
              type="text" 
              name="item"
              value={this.state.text}
              onChange={this.handleChange.bind(this)}
            />
        </label>

        <input type="button" onClick={() => {
          this.props.addToList(this.state.formValues.qty, this.state.formValues.item);
          }} />
      </form>

    );
  }
}

export default AddGrocery;
