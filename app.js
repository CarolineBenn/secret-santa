var express    = require('express');
var app        = express();

var pairs = [];
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
    fullName: 'Kimberley S',
    email: 'Kimberley@Smith.co.uk',
    address: '321 Other Steet,\n Northampton,\n Northants,\n POSTCODE',
    isSanta: false,
    isSantee: false
  },
  {
    name: 'Lucerne',
    fullName: 'Nikita W',
    email: 'test@iamlucerne.com',
    address: 'Somewhere',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Fische',
    fullName: 'Em V',
    email: 'emily@fische.com',
    address: 'Bath',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Ayah',
    fullName: 'Ayaaaaah',
    email: 'ayah@hayh.com',
    address: 'France',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Totem',
    fullName: 'Charlotte W',
    email: 'Charlotte@jelly.com',
    address: 'Essex',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Finella',
    fullName: 'Alice H',
    email: 'scotland@alice.com',
    address: 'Scotland',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Chibbi',
    fullName: 'Kelleh D',
    email: 'chibbi@x.com',
    address: 'The North',
    isSanta: false ,
    isSantee: false
  },
  {
    name: 'Reuben',
    fullName: 'Suzi W',
    email: 'r@b.com',
    address: 'Surrey',
    isSanta: false ,
    isSantee: false
  },
  {
    name: "Tracy",
    fullName: "Tracy Wu",
    email: "Tracy@Tracywu.com",
    address: "Round 'ere parts",
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
    console.log("********* Current santa is " + secretSantas[key].name)

    var pickedSanta  = secretSantas[key]; // This is the current Santa.
    
    while (pickedSanta.isSanta == false) {

      var pickedSantee = secretSantas[Math.floor(Math.random() * secretSantas.length)]; 

      if (pickedSanta != pickedSantee){
        pairUp(pickedSanta, pickedSantee);
        pickedSanta.isSanta   == true;
        pickedSantee.isSantee == true;
        break;
      } else {
        // console.log("*********** THERE IS A CLASH *************");
        // console.log("between " + pickedSanta.name + " and " + pickedSantee.name)
        console.log("Ooooooooooooh shit, yo!")
        start(secretSantas)
      }    
    }
  }
}


start(secretSantas);


app.listen(3000 , function(){
  console.log('app running on port 3000');
});