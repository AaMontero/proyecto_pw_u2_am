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
  data() {return{
    lista: lista //lista - Con un solo campo 

  }},
  methods: {
    agregarEstudiante(){
        this.lista.unshift({ nombre: "Pedro", apellido: "Picapiedra", edad: 35 })
    },

  },
});

app.mount("#myApp");
