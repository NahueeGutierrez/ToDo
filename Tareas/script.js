//Funcion para agregar tarea
function agregarTarea() {
    var input = document.getElementById("tareaInput");
    var tarea = input.value;
    input.value = "";

    if (tarea === "") {
        alert("Por favor introducir tarea");
        return;
    }

    var listaTareas = document.getElementById("listaTareas");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(tarea));
    listaTareas.appendChild(li);
}