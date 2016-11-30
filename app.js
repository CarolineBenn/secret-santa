var express    = require('express');
var app        = express();

var secretSantas = [
  {
    name: 'Snowy',
    fullName: 'Caroline B',
    email: 'test@testing.com',
    address: '123 Blah Street,\n London,\n POSTCODE',
    isSanta: false,
    isSantee: false
  },
  {
    name: 'Holley',
    fullName: 'Holley',
    email: 'Holley@Holley.co.uk',
    address: '321 Other Steet,\n Northampton,\n Northants,\n POSTCODE',
    isSanta: false,
    isSantee: false
  },
  {
    name: 'Lucerne',
    fullName: 'Lucerne',
    email: 'test@iamlucerne.com',
    address: 'Somewhere',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Fische',
    fullName: 'Fische',
    email: 'Fische@fische.com',
    address: 'Bath',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Ayah',
    fullName: 'Ayaaaaah',
    email: 'ayah@ayah.com',
    address: 'France',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Totem',
    fullName: 'Totem',
    email: 'Totem@Totem.com',
    address: 'A place',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Finella',
    fullName: 'Finella',
    email: 'scotland@Finella.com',
    address: 'Scotland',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Chibbi',
    fullName: 'Chibbi',
    email: 'chibbi@Chibbi.com',
    address: 'The North',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Reuben',
    fullName: 'Reuben',
    email: 'Reuben@Reuben.com',
    address: 'South-west',
    isSanta: false ,
    isSantee: false
  }
];



function pairUp(pickedSanta, pickedSantee){
  // console.log("Santa is: \n-" + pickedSanta.name);
  // console.log("Santee is: \n-" + pickedSantee.name);

  // var pairedObj = {};

  // pairedObj['santa'] = pickedSanta;
  // pairedObj['santee'] = pickedSantee;

  // pairs.push(pairedObj);

}


function checkSantaSanteeNames(pickedSanta){

  var pickedSantee = secretSantas[Math.floor(Math.random() * secretSantas.length)]; 

  if (pickedSanta != pickedSantee){
    pairUp(pickedSanta, pickedSantee);
    pickedSanta.isSanta == true;
  } else {
    // console.log("*********** THERE IS A CLASH *************");
    // console.log("between " + pickedSanta.name + "and " + pickedSantee.name)
    start(secretSantas)
  }
    return pickedSanta;
}


function start(secretSantas){

  for (var i = 0; i < secretSantas.length; i++){
    console.log("********* Current santa is " + secretSantas[i].name)

    var pickedSanta  = secretSantas[i]; // This is the current Santa.
    
    while (pickedSanta.isSanta == false) {

      var pickedSantee = secretSantas[Math.floor(Math.random() * secretSantas.length)]; 

      if (pickedSanta != pickedSantee){
        pairUp(pickedSanta, pickedSantee);
        pickedSanta.isSanta   == true;
        pickedSantee.isSantee == true;

        console.log("pickedSanta: " + pickedSanta.name)
        console.log("pickedSantee: " + pickedSantee.name)

        break;
      } else {
          console.log("ERROR: pickedSanta: " + pickedSanta.name + ", pickedSantee: " + pickedSantee.name)
          for (var i = 0; i < secretSantas.length; i++){
            pickedSanta.isSanta   == false;
            pickedSantee.isSantee == false;
          }  
          start(secretSantas)
        break;
      }    
    }
  }
}


start(secretSantas);


app.listen(3000 , function(){
  console.log('app running on port 3000');
});