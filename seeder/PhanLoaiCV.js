const seeder = require('mongoose-seed');
const faker = require('faker');

let items = [];
for(i=0; i < 15; i++){
    items.push(
        {
          name : faker.random.arrayElement(['PHP', 'Javascript', 'SQL', 'NoSQL', 'Nodejs', 'Reactjs']),
        }
    )
}

let data = [{
    'model': 'PhanLoaiCV',
    'documents': items
}]

// connect mongodb
seeder.connect('mongodb://localhost:27017/itwork2018', function() {
  seeder.loadModels([
    '../model/PhanLoaiCV'  // load mongoose model 
  ]);
  seeder.clearModels(['PhanLoaiCV'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});