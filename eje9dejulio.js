

class Persona {
    constructor(nombre, genero, edad ){
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
    }
    obtDetalles(){
        console.log(`La persona es ${this.nombre} con el genero ${this.genero} y edad ${this.edad}` );
    }
}
let Gugo = new Persona("Gugoh", "Gorila", "27");

Gugo.obtDetalles();


/*Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.*/



    class Estudiante extends Persona { 
        constructor(nombre, genero, edad, curso, grupo) {
            super(nombre, genero, edad);
            this.curso = curso;
            this.grupo = grupo;

          }
          registrar(){
               return(`La persona es ${this.nombre} con el genero ${this.genero} y edad ${this.edad} el estudia ${this.curso} esta en el ${this.grupo}` );
            };
        }
    
      

      let ElEstudiante = new Estudiante("Gugoh", "Gorila", 27 , "FullStack", 80);

      let data =  ElEstudiante.registrar();
      document.getElementById("estudiante").innerHTML = data

    

      /*Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado. */


    
    class Profesor extends Persona { 
        constructor(nombre, genero, edad, asignatura, nivel) {
            super(nombre, genero, edad);
            this.asignatura = asignatura;
            this.nivel = nivel;

          }

        registrar(){
            return(`La persona es ${this.nombre} con el genero ${this.genero} y edad ${this.edad} el profesor dela ${this.asignatura} esta en el nivel ${this.nivel}` );
         };
    }
    let Elprofesor = new Profesor("Gugoh", "Gorila", 27 , "Historia", 3);
    let profe =  ElEstudiante.registrar();
      document.getElementById("profesor").innerHTML = profe

