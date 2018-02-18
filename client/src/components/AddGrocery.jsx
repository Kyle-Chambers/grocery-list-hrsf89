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


// class Test extends React.Component {
//   constructor(props) {
//       super(props)
//       this.state = {
//           formValues: {}
//       }
//   }

//   handleChange(event) {
//       event.preventDefault();
//       let formValues = this.state.formValues;
//       let name = event.target.name;
//       let value = event.target.value;

//       formValues[name] = value;

//       this.setState({formValues})
//   }

//   handleSubmit(event) {
//       event.preventDefault();
//       console.log(this.state.formValues);
//   }

//       render(){
//       return (
//       <form onSubmit={this.handleSubmit.bind(this)}>
//               <label> Name:
//                   <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
//               </label><br />
//               <label> Email:
//                   <input type="text" name="email" placeholder="Email" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
//               </label><br />
//                   <input className="btn btn-primary" type="submit" value="Submit" />
//          </form>
//     )
//   }
// }