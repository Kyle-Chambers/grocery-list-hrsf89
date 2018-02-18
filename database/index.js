const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo, hey do something');
});

var groceryListSchema = mongoose.Schema({
  id: Number,
  quantity: Number,
  description: String
});

var GroceryList = mongoose.model('GroceryList', groceryListSchema);


let save = (item) => {
  
  item.id = Number(item.id);
  item.quantity = Number(item.quantity);

  let listItem = new GroceryList({item});

  listItem.save((err, data) => {
    if (err) {
      console.log('something is not working with save function in database');
    }
    console.log(data, 'from inside save');
  });

  GroceryList.find((err, data) => {
    if (err){
      console.log('something is not working with data retreival from save func');
    }
    console.log(data, "huhhh??");
  });

  // GroceryList.remove({}, (err) => {
  //   if(err) throw err;
  // });
}

// let getData = () => {

// }

module.exports.save = save;