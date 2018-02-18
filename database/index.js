const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
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
  listItem = new GroceryItem({item});

  listItem.save((err, data) => {
    if (err) {
      console.log('something is not working with save function in database');
    }
  });

  GroceryList.find((err, data) => {
    if (err){
      console.log('something is not working with data retreival from save func');
    }
    console.log(data);
  });

  let getData = () => {
    
  }
}

module.exports.save = save;