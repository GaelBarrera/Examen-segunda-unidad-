var productos = [];
var conjunto = [];
var inicio = prompt("CANTIDAD DE PRODUCTOS A INGRESAR");
for (var i = 1; i <=inicio; i++){
    datos(i);
}

function datos(i){
    let nombre = prompt("INGRESA EL NOMBRE DEL PRODUCTO");
    let precio = prompt("INGRESA EL PRECIO DEL PRODUCTO");
    let inventario =prompt("INGRESA LA CANTIDAD DE PRODUCTOS QUE HABRA EN EL INVENTARIO");
    
    var producto = {
        nombre:nombre,
        precio:precio,
        inventario:inventario,
        
    }
    productos.push(producto); 
}
var op = prompt("Ingresa la operación que quieres realizar:","Vamos al Carrito");
switch(op){
    case "Vamos al Carrito":
conjunto = [];
    let nProductos = prompt("INGRESA LA CANTIDAD DE  PRODUCTOS QUE CONTENDRA TUCARRITO");
        for(let i = 0; i < nProductos; i++){
    let nombre =  sumarProductos(conjunto);
        for(let j = 0; j < productos.length; j++){
        if(productos[j].nombre == nombre){
            conjunto.push(conjunto);
          for(let c = 0; c < conjunto.length; c++){
          
            suma += conjunto[j].precio;
            }
        }
    }
                    
}                 
                break;
}
var p = prompt("DESEAS SABER EL TOTAL DE TU COMPRA:","SI");
switch(p){
    case "SI":
totalProductos(productos);
break;
}
var p1 = prompt("DESEAS REALIZAR OTRA COMPRA:(SI) (NO)");
switch(p1){
    case "SI":
    switch(op){
    case "Vamos al Carrito":
conjunto = [];
    let nProductos = prompt("INGRESA LA CANTIDAD DE  PRODUCTOS QUE CONTENDRA TUCARRITO");
        for(let i = 0; i < nProductos; i++){
    let nombre =  sumarProductos(conjunto);
        for(let j = 0; j < productos.length; j++){
        if(productos[j].nombre == nombre){
            conjunto.push(conjunto);
          for(let c = 0; c < conjunto.length; c++){
          
            suma += conjunto[j].precio;
            }
        }
    }
                    
}                 
                break;
                
}
var p = prompt("DESEAS SABER EL TOTAL DE TU COMPRA:","SI");
switch(p){
    case "SI":
totalProductos(productos);
break;
}
break;
case "NO":
    alert("DISFRUTA TU COMPRA");
    break;

}

function sumarProductos(elementos){    
    let nombre = prompt("INGRESE EL NOMBRE DEL PRODUTO PARA OBTENER INFORMACION");
    for(let i = 0; i < productos.length; i++){
                        if(productos[i].nombre == nombre){
                        console.log("Nombre: "+productos[i].nombre+"\nPrecio: "+productos[i].precio+"\ninventario:"+productos[i].inventario);
                        }
                    }
}
;

function totalProductos(elementos){
          let suma = 0;
          for(let i = 0; i < elementos.length; i++){
              suma += parseInt(elementos[i].precio);
         conjunto.push(suma);
          
     }
     alert("total:" + suma * elementos.length / elementos.length);
        }
        
