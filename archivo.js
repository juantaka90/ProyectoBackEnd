const fs = require('fs');

class Contenedor {
constructor(contenedora) {
this.contenedora = contenedora;
}

async save(objeto) {
try {
    let conjunto = JSON.parse(await fs.promises.readFile(this.contenedora, 'utf-8'));
    // let conjunto = await fs.promises.readFile(this.contenedora);
// conjunto = JSON.parse(conjunto);
objeto.id = conjunto.length +1;
conjunto.push(objeto);
await fs.promises.writeFile(this.contenedora, JSON.stringify(conjunto));
} catch (error) {
    console.log(error);
}
}
}

async function ejecutarContenedora() {
    let cont = new Contenedor("contenedora.txt");

await cont.save({
    title: 'fernet',
    price: 28.50,
    thumbnail: 'link'});
};

ejecutarContenedora();
