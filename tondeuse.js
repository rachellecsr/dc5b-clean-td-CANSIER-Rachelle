const fs = require('fs')

const data = [
  { id: 1, nom: 'Tondeuse 1', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 2', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 3', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 4', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 5', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 6', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 7', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 8', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 9', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 10', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 11', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 12', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 13', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 14', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 15', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 16', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 17', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 18', puissance: '10kw', autonomie: '2h', energie: 'A' },
  { id: 1, nom: 'Tondeuse 19', puissance: '10kw', autonomie: '2h', energie: 'A' },


]

const writeStream = fs.createWriteStream('tondeuse.csv')

writeStream.write('Id;Nom de la tondeuse;Puissance;Autonomie;Energie\n')

data.forEach((d) => {
  writeStream.write(`${d.id};${d.nom};${d.puissance};${d.autonomie};${d.energie}\n`)
})

writeStream.end()