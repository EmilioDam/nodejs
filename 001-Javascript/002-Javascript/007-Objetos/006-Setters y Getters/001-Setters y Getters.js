class Persona{
    constructor(){
        this.edad = 0
        this.nombre = "";
    }
    setEdad(nuevaedad){
        this.edad = nuevaedad
    }
    setnombre(nuevonombre){
        this.nombre = nuevonombre
    }
    saluda(){
        console.log("Hola, me llamo "+this.nombre+" y tengo"+this.edad)
    }
}

var persona1 = new Persona();
persona1.setEdad(45);
persona1.setnombre ("Jose vicente");
console.log(persona1)
persona1.saluda();