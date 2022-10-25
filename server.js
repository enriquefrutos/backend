const fs = require ('fs');

class Contenedor {
constructor(archivo){
    this.archivo = archivo;
}
async save(object){
    const data = await fs.promises.readFile('data/contenedor.json','utf-8');
    const objetos = JSON.parse(data);
    const id = objetos.length + 1;
    object.id = id;
    objetos.push(object)
    const objectString = JSON.stringify(objetos)
    await fs.promises.writeFile('data/contenedor.json',objectString)
}

async getById(number){
    const data = await fs.promises.readFile('data/contenedor.json','utf-8');
    const objetos = JSON.parse(data)
    const usuario = objetos.find((usuario)=> usuario.id = number)
    return usuario;
}
async getAll(){const data = await fs.promises.readFile('data/contenedor.json','utf-8');
return data}
async deletedById(number){
    const data = await fs.promises.readFile('data/contenedor.json','utf-8');
    const objetos = JSON.parse(data);
    const usuario = objetos.filter((usuario)=> usuario.id != number)
    const objectString = JSON.stringify(usuario)
    await fs.promises.writeFile('data/contenedor.json',objectString)
    return objetos;
}
async deleteAll(){
    try {
        const Productos = [[]];
        await fs.promises.writeFile('data/contenedor.json', Productos)

    } catch (error) {
        console.log('Se ha producido un error', 'error numero: ', error);
    } 
}
}

async function start() {
const db = new Contenedor ('data');
db.save({titulo:'shampoo', precio:'150'});
//console.log(await db.getAll());
//const usuario = await db.getById(1);
//console.log(usuario);
//db.deletedById(3)
//db.deleteAll()
}
start()