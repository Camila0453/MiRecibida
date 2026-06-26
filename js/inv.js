
    function crearConfetti() {
      const colores = ['#ff4fa3', '#ffd166', '#ffffff', '#ff85c2', '#c77dff'];

      for (let i = 0; i < 90; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confetti.style.animationDuration = (4 + Math.random() * 4) + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.width = (8 + Math.random() * 8) + 'px';
        confetti.style.height = (8 + Math.random() * 8) + 'px';

        document.body.appendChild(confetti);
      }
    }
const botonCerrar = document.getElementById("cerrarDialogo");
const dinoBox = document.getElementById("dinoBox");

if (botonCerrar && dinoBox) {
  botonCerrar.addEventListener("click", () => {
    dinoBox.style.display = "none";
  });
}
  
    crearConfetti();

document.addEventListener("DOMContentLoaded", () => {

    const abrir = document.getElementById("abrirModal");
    const cerrar = document.getElementById("cerrarModal");
    const modal = document.getElementById("modalMensaje");

    abrir.addEventListener("click", function(e){
        console.log("hola")
    });

    cerrar.addEventListener("click", function(){
        modal.classList.remove("mostrar");
    });

    window.addEventListener("click", function(e){
        if(e.target === modal){
            modal.classList.remove("mostrar");
        }
    });

});