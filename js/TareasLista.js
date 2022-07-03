const TareasLista = [
    { tarea: "Hacer Deberes", horaInicio: "16:00", horaFin:"18:00" },
    { tarea: "Lavar la Ropa", horaInicio: "15:00", horaFin:"16:00" },
    { tarea: "Limpiar la Habitación", horaInicio: "14:00", horaFin:"15:00" },
    { tarea: "Hacer las compras", horaInicio: "09:00", horaFin:"10:30" },
    { tarea: "Preparar el Almuerzo", horaInicio: "12:00", horaFin:"13:00" },
  ];

  const app = Vue.createApp({
    data() {
        return {
          TareasLista: TareasLista, //lista - Con un solo campo
          tarea:"",
          horaFin: "",
          horaInicio:"",
        };
      },
      methods: {
        /*agregarTareaI(){
            this.TareasLista.unshift({ tarea: this.tarea, horaInicio: this.horaInicio, horaFin: this.horaFin }); 
            this.tarea=""; 
            this.horaInicio=""; 
            this.horaFin=""; 
        },
        agregarTareaF(){
            this.TareasLista.push({ tarea: this.tarea, horaInicio: this.horaInicio, horaFin: this.horaFin }); 
            this.tarea=""; 
            this.horaInicio=""; 
            this.horaFin=""; 
        },*/
        agregarTarea(tipo){
            if(tipo=="I"){
                this.TareasLista.unshift({ tarea: this.tarea, horaInicio: this.horaInicio, horaFin: this.horaFin }); 
            }else{
                this.TareasLista.push({ tarea: this.tarea, horaInicio: this.horaInicio, horaFin: this.horaFin }); 
            }
            this.tarea=""; 
            this.horaInicio=""; 
            this.horaFin=""; 
        }
      }

  }); 
  app.mount("#myApp");