const lista = [
  { nombre: "Anthonny", apellido: "Montero", edad: 26 },
  { nombre: "Pepito", apellido: "Aguirre", edad: 23 },
  { nombre: "Juanito", apellido: "Montalvo", edad: 24 },
  { nombre: "Andrea", apellido: "Andrade", edad: 21 },
  { nombre: "Daniela", apellido: "Madera", edad: 31 },
  { nombre: "Eduardo", apellido: "Arteaga", edad: 15 },
];

const app = Vue.createApp({
  //Options API
  data() {
    return {
      lista: lista, //lista - Con un solo campo
      mensaje:"",
      nombre: "",
      apellido:"",
      edad:""
    };
  },
  methods: {
    agregarEstudianteI() {
      this.lista.unshift({
        nombre: this.mensaje,
        apellido: "inicio",
        edad: 35,
      });
      this.mensaje = "";
    },
    agregarEstudianteF() {
      this.lista.push({ nombre: this.mensaje, apellido: this.apellido, edad: this.edad });
      this.mensaje = "";
    },
    agregarEstudiante(tipo) {
      if (tipo === 'I') {
        this.lista.unshift({
          nombre: this.nombre,
          apellido: this.apellido,
          edad: this.edad,
        });
        //this.lista.unshift({apellido: this.apellido,edad: this.edad});
      } else {
        this.lista.push({ nombre: this.nombre, apellido: this.apellido, edad: this.edad });
        //this.lista.push({apellido: this.apellido,edad: this.edad});
      }
      this.nombre = ""; this.apellido="",this.edad=""; 
    },
    eventoKey(event) {
      if (event.charCode === 13) {
        console.log("Se aplasto el enter");
        this.lista.unshift({
          nombre: this.mensaje,
          apellido: "Picapiedra",
          edad: 35,
        });
      }
    },
    eventoKeyDesestructurado({charCode,key}) {
        //Evento desestructurado
        //console.log(key)
        //console.log(charCode)
        console.log("Entro al evento")
        if (charCode === 13) {
          console.log("Se aplasto el enter");
          this.lista.unshift({
            nombre: this.mensaje,
            apellido: "Picapiedra",
            edad: 35,
          });
        }
      },
    eventofinal(){
        console.log("Entro al Evento")
        this.lista.unshift({
            nombre: this.mensaje,
            apellido: "Picapiedra",
            edad: 35,
          });
    },
  },
});

app.mount("#myApp");
