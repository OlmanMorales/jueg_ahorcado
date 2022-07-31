
function ocultar(){
    document.getElementById("agregar__palabra").style.display = "none";
}ocultar()

function pantallaAgregarPalabra() {
    document.getElementById("ocultar").style.display = 'none';
   
   document.getElementById("agregar__palabra").style.display = "flex";
   
}

function guardarPalabra() {   
  let mayusculas = new RegExp('^[A-Z]+$');  
  let palabraNueva = document.getElementById('input__nueva-palabra').value;
  if (mayusculas.test(palabraNueva)){
    if(palabraNueva !== ""){
      localStorage.palabraNueva = document.getElementById('input__nueva-palabra').value;
      alert('La palabra fue guardada');
      document.location.href="./juego.html";     
    }
    else{
      alert("Ninguna palabra ha sido digitada")
    }  

  }else{
    alert("Solo Palabras en Mayusculas")
  }

  
}

function cancelar(){
  document.location.href="./index.html";
}


  