// class Usuario {
// constructor (nombre, apellido, mascotas, libros) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.mascotas = mascotas;
//     this.libros = libros;
//     }
//     UsuariogetFullName() {
//         console.log(`${this.nombre} ${this.apellido}`);
//     }
//     UsuarioaddMascota(loro){
//         this.mascotas.push(loro); 
//         console.log(this.mascotas);
//         }
        
//         countMascotas(){
//         const cantMascotas = [1];
//         cantMascotas.length = 1;
//         console.log(cantMascotas);
//         }

//         addBook(libro, autor) {
//             this.libros.push({
//             nombre: libro,
//             autor: autor
//             });
//             }
        
//         getBookNames(){
//         console.log(this.libros.map(libro => libro.nombre));
//         }
//         }

// const jorgeFaustino = new Usuario('Jorge', 'Faustino', [], []);
// jorgeFaustino.UsuariogetFullName();

// const eduardoAlfonso = new Usuario('Eduardo', 'Alfonso',[], []);
// eduardoAlfonso.UsuarioaddMascota("loro");
// eduardoAlfonso.UsuarioaddMascota("tero");
// eduardoAlfonso.countMascotas();
// eduardoAlfonso.addBook('El SeñorDe Los Anillos', 'J R. R. Tolkien');
// console.log(eduardoAlfonso.libros);
// eduardoAlfonso.getBookNames();

const fs = require('fs');

class Contenedor {
constructor(contenedora) {
this.contenedora = contenedora;
this.id = 1;
}

async save(caja) {

try {
    let  conjunto = await fs.promises.readFile(this.contenedora);
conjunto = JSON.parse(conjunto);
caja.id = conjunto.length +1;
conjunto.push(caja);
await fs.promises.writeFile(this.contenedora, JSON.stringify(conjunto));
} catch (error) {
console.log(error);

}
}
async getById(id) {
    try {
    const elementos = await fs.promises.readFile(this.contenedora);
    const elemento = JSON.parse(elementos);
    const elementoId = elemento.find((el) => el.id == id);
    return elementoId;
    }catch (error) {
    console.log('Error al buscar el elemento');
    }
}
async getAll() {
    try {
        const items = await fs.promises.readFile(this.contenedora);
        const item = JSON.parse(items);
        return item;
    } catch (error) { 
    console.log("Error al obtener items");
        return [];
}
}
async deleteById(id) {
    const item = await fs.promises.readFile(this.contenedora);
    let conten = JSON.parse(item);
    let contenedora = conten.filter((cont) => cont.id !== id);
    await fs.promises.writeFile(this.contenedora, JSON.stringify(contenedora));
        console.log("Se elimino un item");
}
async deleteAll() {
    await fs.promises.writeFile(this.contenedora, "[]", (error) => {
        if (error) {
        console.log("Error");
    } else {
        console.log("Se borro el contenido completo");
    }
});
}
}
async function ejecutarContenedora() {
    const cont = new Contenedor("contenedora.txt");
// await cont.save({
// title: 'fernet',
// price: 28.50,
// thumbnail: 'link'});
// console.log(await contenedora.getById(1));
// console.log(bucarPorID)
// console.log(await cont.getById(1));
// console.log(await cont.deleteById(3));
// console.log (await cont.deleteAll());
// console.log(await cont.getAll());
};

ejecutarContenedora();

module.exports = Contenedor;