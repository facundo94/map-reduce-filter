var vec = [3,4,2,6,7,5];

// var suma = 0;

// for(var i = 0; vec.length; i++){
//     suma += vec[i];
// }

// console.log(suma);

//** 'anterior' va desde 0 hasta length-1, y 'actual' desde 1 hasta length*/
// vec.reduce(function(anterior, actual, indice){
//    console.log(anterior); 
// }, 0);//El segundo parametro es el valor de inicio de 'anterior'

//**En este caso va llamando a la funcion y comparando entre el valor actual y anterior para sacar el maximo*/
var max = vec.reduce(function(anterior, actual){
    if(anterior > actual)
        return anterior;
    else    
        return actual;
});

console.log(max)