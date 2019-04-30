let jumpStop = [];
let chattenRecords = [];
let polarRecords = [];

const funkRapArtist = (artist, age) => {
    const artistObj =  {
    artist: artist,
    age: age
    };
    jumpStop.push(artistObj)
}

const countryBluegrassArtist = (artist, age) => {
    const artistObj = {
      artist: artist,
      age: age
    };
    chattenRecords.push(artistObj);
};

const popArtist = (artist, age) => {
    const artistObj = {
      artist: artist,
      age: age
    };
    polarRecords.push(artistObj);
};


funkRapArtist("Dre Funkz", 25);
funkRapArtist("Dusta Grimes", 21);
funkRapArtist("Loyoncé", 27);
console.log(jumpStop)

countryBluegrassArtist("Bruce Atikins", 23);
countryBluegrassArtist("Bartholomew Danielson", 23);
countryBluegrassArtist("Avilee Dallas", 19);
console.log(chattenRecords);

popArtist("Jensen Brown", 20);
popArtist("Austin Kinkaid ", 22);
console.log(polarRecords);