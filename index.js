// norint terminale iskviesti si faila:
// rasome "node ." (be kabuciu, of course)

const Sarasas = require('./Sarasas');

const automobiliai = new Sarasas();

automobiliai.prideti('audi');
automobiliai.prideti('volvo');
automobiliai.prideti('tesla');
automobiliai.prideti('zapas');
automobiliai.prideti('gazelka');

automobiliai.redaguoti(3, 'opel');

automobiliai.pasalinti(1);
automobiliai.pasalinti(3);
automobiliai.pasalinti(2);

automobiliai.spausdinti();
