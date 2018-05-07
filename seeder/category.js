const seeder = require('mongoose-seed');
const faker = require('faker');

let items = [];
for(i=0; i < 15; i++){
    items.push(
        {
            name : faker.random.words(1,3),
        }
    )
}

let data = [{
    'model': 'Category',
    'documents': items
}]

// connect mongodb
seeder.connect('mongodb://localhost:27017/itwork2018', function() {
  seeder.loadModels([
    '../model/Category'  // load mongoose model 
  ]);
  seeder.clearModels(['Category'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});