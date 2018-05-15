const seeder = require('mongoose-seed');
const faker = require('faker');

let items = [];
for(i=0; i < 15; i++){
    items.push(
        {
          TenCongTy: faker.company.companyName(),
          logo: faker.image.image(),
          DiaChi: faker.address.city(),
          LoaiCongViec: faker.random.arrayElement(['outSourcing','Product']),
          SoLuong: faker.random.number(1,1000),
          ThoiGian: 'Monday - Friday',
          OT: faker.random.arrayElement(['No OT', 'Extra salary for OT']),
          MoTa: faker.lorem.paragraphs(4,"<br /><br />")
        }
    )
}

let data = [{
    'model': 'TTCongTy',
    'documents': items
}]

// connect mongodb
seeder.connect('mongodb://quan:12345678@ds117540.mlab.com:17540/itjob', function() {
  seeder.loadModels([
    '../model/TTCongTy'  // load mongoose model 
  ]);
  seeder.clearModels(['TTCongTy'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});