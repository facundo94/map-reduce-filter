var select;
window.onload= function(){
    var btn = document.getElementById("btnCargar");
    select = document.getElementById("cmbNombre");

    btn.addEventListener('click', cargar);
}

function cargar(){
    clearSelect();

    empleados.map(function(x){
        var option = document.createElement('option');
        option.textContent = x.nombre;
        select.appendChild(option);
    });
}

function clearSelect(){
    var length = select.options.length;
    for (i = 0; i < length; i++) {
        select.remove(0);
    }
}

// var vec = [3,4,2,6,7,5];

// var dobles = [];

// for(var i = 0; i < vec.length; i++){
//     dobles.push(vec[i] * 2);
// }

// vec.forEach((elemento)=>{
//     dobles.push(elemento * 2);
// });

// var dobles = vec.map();

// console.log(dobles);

//**Aplica la funcion a cada elemento de la lista */
// var dobles = vec.map((valor)=>{ return valor * 2;});

//**Con funciones de flecha gorda si solo hay una sentencia se puede escribir abreviado */
// var dobles = vec.map(valor=> valor * 2);

// console.log(dobles);

//**Otra forma */
// console.log([3,4,2,6,7,5].map(valor => valor * 2));

// console.log(empleados.map(x => x.nombre));

// var x = empleados.map(function(e){
//     return {"nombre": e.nombre, "apellido": e.apellido}    
// });