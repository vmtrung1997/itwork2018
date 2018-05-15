const seeder = require('mongoose-seed');
const faker = require('faker');
let args = [
  "Agile",
  "Android",
  "AngularJS",
  "ASP.NET",
  "AWS",
  "Blockchain",
  "Bridge Engineer",
  "Business Analyst",
  "C#",
  "C++",
  "C language",
  "Cloud",
  "CSS",
  "Database",
  "Designer",
  "DevOps",
  "Django",
  "Drupal",
  "Embedded",
  "English",
  "ERP",
  "Games",
  "Golang",
  "HTML5",
  "Hybrid",
  "iOS",
  "IT Support",
  "J2EE",
  "Japanese",
  "Java",
  "JavaScript",
  "JQuery",
  "JSON",
  "Laravel",
  "Linux",
  "Magento",
  "Manager",
  "Mobile Apps",
  "MVC",
  "MySQL",
  ".NET",
  "Networking",
  "NodeJS",
  "Objective C",
  "OOP",
  "Oracle",
  "PHP",
  "PostgreSql",
  "Product Manager",
  "Project Manager",
  "Python",
  "QA QC",
  "ReactJS",
  "React Native",
  "Ruby",
  "Ruby on Rails",
  "SAP",
  "Sharepoint",
  "Software Architect",
  "Spring",
  "SQL",
  "Swift",
  "System Admin",
  "System Engineer",
  "Team Leader",
  "Tester",
  "UI-UX",
  "Unity",
  "Wordpress",
  "Xamarin",
  "Full Stack",
  "Front End",
  "Back End",
  "QA",
  "QC"
];


let items = [];
 args.forEach(element => {
   items.push(
       {
         Ten : element
       }
   )
 });

let data = [{
    'model': 'PhanLoaiCV',
    'documents': items
}]

// connect mongodb
seeder.connect('mongodb://quan:12345678@ds117540.mlab.com:17540/itjob', function() {
  seeder.loadModels([
    '../model/PhanLoaiCV'  // load mongoose model 
  ]);
  seeder.clearModels(['PhanLoaiCV'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});


