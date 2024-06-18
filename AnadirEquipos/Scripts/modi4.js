//*************************Alumnos**********************************

// BOTONES
const boton= document.querySelector(".botonAñadir");
boton.addEventListener("click",añadirGrupos);

const boton2 = document.querySelector(".botonResetear");
boton2.addEventListener("click",borrarTodo);

// FUNCION ALUMNOS
function añadirGrupos() {
  let nombreAlumno = document.getElementById("nombreAlumno").value;
  let grupoSeleccionado = document.getElementById("grupos").value;

  if (grupoSeleccionado === "opcion1") {
    document.getElementById("grupo1opcion1").innerHTML += "<li> "+ nombreAlumno +"</li>"; 
   }else if(grupoSeleccionado === "opcion2") {
   document.getElementById("grupo2opcion2").innerHTML +=  " <li>"+ nombreAlumno +"</li>"; 
  }else{
     document.getElementById("grupo3opcion3").innerHTML +=  "<li> "+ nombreAlumno +"</li>";
   }
  document.getElementById("myformulario").reset();
 
 }
 
// FUNCION PARA RESETEAR TODO
function borrarTodo() {
  document.getElementById("grupo1opcion1").innerHTML ="<li>"+ "Grupo 1"+ "</li>" ;
  document.getElementById("grupo2opcion2").innerHTML = "<li>"+ "Grupo 2"+ "</li>";
  document.getElementById("grupo3opcion3").innerHTML = "<li>"+ "Grupo 3"+ "</li>";
}

