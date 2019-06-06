var vec = [3,4,2,6,7,5];

var suma = 0;

for(var i = 0; vec.length; i++){
    suma += vec[i];
}

console.log(suma);

//'anterior' va desde 0 hasta length-1, y 'actual' desde 1 hasta length
vec.reduce(function(anterior, actual, indice){
   console.log(anterior); 
}, 0);//El segundo parametro es el valor de inicio de 'anterior'

var max = cev.reduce(function(maximo, actual){
    if(maximo > actual)
        return maximo;
    else    
        return actual;
});