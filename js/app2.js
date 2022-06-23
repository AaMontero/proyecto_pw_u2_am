console.log("Objetos y Librerias de Vue.JS: ");
console.log(Vue);
// Vue utiliza una representacion declarativa para evaluar sentencias JS {{}}
const app = Vue.createApp({
  //template: `
  //<h1> Hola Mundi desde  Vue JS </h1>
  //<p>Expresion JS</p>
  //<h2>Arreglo</h2>
  //<p>{{[1,2,,3,4,5]}}</p>
  //<p>{{1+1}}</p>
  //<p>{{{nombre:1,apellido:2} }}</p>
  //<h2>Funcion Ternaria    </h2>
  //<p>{{true? 'Activo':'Inactivo'}}</p>
  // `
  data() {
    return {
        mensaje: 'Mensaje desde un atributo DATA ',
        mensaje2: 'Mensaje 2 desde un atributo DATA'
    }
  },
});

app.mount("#myApp");
