function mostraEsdeveniment(nomEsdeveniment) {
    // Obtenim la referència al div on es mostrarà l'esdeveniment
    var pantalla = document.getElementById("eventDisplay");
    // Modifiquem el contingut del div per mostrar l'esdeveniment de forma més amenaçadora
    var descripcioEsdeveniment;
    switch (nomEsdeveniment) {
        case "DOMContentLoaded":
            descripcioEsdeveniment = "El DOM s'ha carregat completament";
            break;
        case "click":
            descripcioEsdeveniment = "S'ha fet clic al botó";
            break;
        case "mouseover":
            descripcioEsdeveniment = "S'ha passat el ratolí per sobre de l'enllaç";
            break;
        case "change":
            descripcioEsdeveniment = "S'ha escrit al quadre de text";
            break;
        case "load":
            descripcioEsdeveniment = "S'ha carregat la imatge";
            break;
        default:
            descripcioEsdeveniment = "Esdeveniment desconegut";
    }
    pantalla.innerHTML = descripcioEsdeveniment;

    // Obtenim la referència al ul del historial
    var historialList = document.querySelector("#historial ul");
    // Creem un element li amb el text de l'esdeveniment
    var li = document.createElement("li");
    li.textContent = descripcioEsdeveniment;
    // Afegim l'element li al ul del historial
    historialList.appendChild(li);
}


// Definim la funció que inicialitzarà els listeners d'esdeveniments
function inicialitza() {
    // Mostrem l'esdeveniment DOMContentLoaded a la pantalla
    mostraEsdeveniment("DOMContentLoaded");

    // Obtenim la referència al botó i afegim un listener d'esdeveniment de clic
    var boto = document.getElementById("myButton");
    boto.addEventListener("click", function () {
        // Mostrem l'esdeveniment click a la pantalla
        mostraEsdeveniment("click");
    });

    // Obtenim la referència a l'enllaç i afegim un listener d'esdeveniment de mouseover
    var enllaç = document.getElementById("myLink");
    enllaç.addEventListener("mouseover", function () {
        // Mostrem l'esdeveniment mouseover a la pantalla
        mostraEsdeveniment("mouseover");
    });

    // Obtenim la referència al quadre de text i afegim un listener d'esdeveniment de canvi
    var quadreText = document.getElementById("myTextbox");
    quadreText.addEventListener("change", function () {
        // Mostrem l'esdeveniment change a la pantalla
        mostraEsdeveniment("change");
    });

    // Obtenim la referència a la imatge i afegim un listener d'esdeveniment de càrrega
    var imatge = document.getElementById("myImage");
    imatge.addEventListener("load", function () {
        // Mostrem l'esdeveniment load a la pantalla
        mostraEsdeveniment("load");
    });
}

// Funció per afegir una nova tasca a la llista
function addTodo() {
    // Obtenim el valor de la nova tasca
    const newTodo = document.getElementById('new-todo').value;
  
    // Creem un element li per a la nova tasca
    const li = document.createElement('li');
    li.textContent = newTodo;
  
    // Afegim un escoltador d'esdeveniments click a l'element li
    li.addEventListener('click', function() {
      showTodo(this);
    });
  
    // Afegim l'element li a la llista
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(li);
  }
  
  // Funció per mostrar la tasca seleccionada en un altre element del DOM
  function showTodo(todo) {
    const selectedTodo = document.getElementById('selected-todo');
    selectedTodo.textContent = todo.textContent;
  }
  
  // Afegim un escoltador d'esdeveniments DOMContentLoaded al document
  // quan es produeix aquest esdeveniment, s'executa la funció inicialitza
  document.addEventListener("DOMContentLoaded", inicialitza);

  function mostraH1() {
    var h1 = document.createElement("h1");
    h1.innerHTML = "Han passat 15 segons!";
    document.body.appendChild(h1);
  }
  
  setTimeout(mostraH1, 15000); // crida la funció "mostraH1" al cap de 15000 mil·lisegons (15 segons)
  
