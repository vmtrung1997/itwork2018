const seeder = require('mongoose-seed');
const faker = require('faker');

let items = [];
for(i=0; i < 15; i++){
    items.push(
        {
          name: faker.company.companyName(),
          logo: faker.image.image(),
          position: faker.address.city(),
          description: faker.lorem.paragraphs(),
        }
    )
}

let data = [{
    'model': 'Company',
    'documents': items
}]

// connect mongodb
seeder.connect('mongodb://localhost:27017/itwork2018', function() {
  seeder.loadModels([
    '../model/Company'  // load mongoose model 
  ]);
  seeder.clearModels(['Company'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});