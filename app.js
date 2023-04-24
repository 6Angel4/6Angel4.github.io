const textarea = document.querySelector(".contenido_textArea");
const resultado = document.querySelector(".contenido_resultado--texto");
const botonEncriptar = document.querySelector(".boton--encriptar");
const botonDesencriptar = document.querySelector(".boton--desencriptar");
const botonCopiar = document.querySelector(".boton--copiar");

botonEncriptar.addEventListener("click", () => {
  /** "click" es pues hacer click en el boton :v*/
  let textoEncriptado =
    textarea.value; /* El texto, de lo contrario es undefined*/
  /**Es en este orden porque si lo pongo como va esto no pitufa */
  textoEncriptado = textoEncriptado.replaceAll("e", "enter");
  textoEncriptado = textoEncriptado.replaceAll("i", "imes");
  textoEncriptado = textoEncriptado.replaceAll("a", "ai");
  textoEncriptado = textoEncriptado.replaceAll("o", "ober");
  textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
  /**
   * resultado que es el cuadro blanco
   * la propiedad textContent de la interfaz Node representa el contenido de texto de un nodo y sus dencendientes.
   * textoEncriptado, es el texto original del textarea con los cambios en las vocales
   * */
  resultado.textContent = textoEncriptado;
});

botonDesencriptar.addEventListener("click", () => {
  /**
   * Aqui reutilizamos lo anterior y ya solo lo usamos para convertirlo a lo original
   */
  let textoDesencriptado = resultado.textContent;
  textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
  textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
  textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
  textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
  textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");
  resultado.textContent = textoDesencriptado;

  /** 
  Aqui reutilice (casi por completo) la funcion de botonEncriptar*/
  let textoDesencriptadoA = textarea.value;
  textoDesencriptadoA = textoDesencriptadoA.replaceAll("enter", "e");
  textoDesencriptadoA = textoDesencriptadoA.replaceAll("imes", "i");
  textoDesencriptadoA = textoDesencriptadoA.replaceAll("ai", "a");
  textoDesencriptadoA = textoDesencriptadoA.replaceAll("ober", "o");
  textoDesencriptadoA = textoDesencriptadoA.replaceAll("ufat", "u");
  resultado.textContent = textoDesencriptadoA;
});

/**
 * Apoyandome de ChatGPT se corrigio el error que se tenia en el boton de copiar
 * - El error que se tenia es que no copiaba, pero al momento de pegar lo copiado era 'undifined'
 *
 * console.log() es para ver en la consola un mensaje
 * catch es solo por si hay un error
 */
botonCopiar.addEventListener("click", () => {
  const textToCopy = resultado.textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Texto Copiado con Exito!");
      window.alert("Texto Copiado con Exito!");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
});
