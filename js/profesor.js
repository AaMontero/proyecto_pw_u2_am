const lista = 
[{nombre: 'Agusto', apellido: 'Gonzales', materia: 'Matemática', instruccion: 'Secundaria', numeroCursos: 6},
{nombre: 'Pablo', apellido: 'Velarde', materia: 'Geometría', instruccion: 'Bachillerato', numeroCursos: 4},
{nombre: 'Santiago', apellido: 'Ayala', materia: 'Álgebra', instruccion: 'Primaria', numeroCursos: 3},
{nombre: 'Ramón', apellido: 'Unda', materia: 'Ciencias Naturales', instruccion: 'Bachillerato', numeroCursos: 2},
{nombre: 'Mercedes', apellido: 'Llerena', materia: 'Biología', instruccion: 'Primaria', numeroCursos: 4}]


const app = Vue.createApp({
    //Options API
    data() {return{
      lista: lista //lista - Con un solo campo 
  
    }},
    methods: {
      agregarProfesor(){
          this.lista.unshift({nombre: 'Marcia', apellido: 'Barros', materia: 'Literatura', instruccion: 'Secundaria', numeroCursos: 3})
      },
  
    },
  });
  
  app.mount("#myApp");