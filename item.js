// Mensaje de Bienvenida
alert("Bienvenido al Club Andino Rio Grande");
let nombreUsuario= prompt("Ingrese su nombre");
let apellidoUsuario=prompt("Ingrese su apellido");
alert("Hola " + nombreUsuario + " " + apellidoUsuario + "¿Estas Listo para Vivir Nuevas Experiencias? Comprando dos productos o mas tenes el 20% de descuento" );
// constructor de cursos
class Curso {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Creación de objetos de cursos
const curso1 = new Curso("Curso de escalada", 12000);
const curso2 = new Curso("Curso de senderismo", 8000);
const curso3 = new Curso("Curso de montañismo", 18000);

// Array 
const cursosDisponibles = [curso1, curso2, curso3];

// Función de orden superior find
const obtenerPrecioCurso = (nombre) => {
    const cursoEncontrado = cursosDisponibles.find(curso => curso.nombre.toLowerCase() === nombre.toLowerCase());
    return cursoEncontrado ? cursoEncontrado.precio : 0;
};


const experienciaCliente = prompt(" Ingrese su nivel de la experiencia: (principiante, intermedio, avanzado)");
let carrito = []; 

//agregar un booleano mientras el cliente sigue agregando cusos
while (true) {
    const cursoElegido = prompt("Ingrese el nombre del curso que desea comprar (Curso de escalada, Curso de senderismo, Curso de montañismo), o ingrese 'fin' para terminar:");

    if (cursoElegido.toLowerCase() === "fin") {
        break; // si elige fin, se termina el bucle
    }

    const precioCursoElegido = obtenerPrecioCurso(cursoElegido);

    // Validar si el curso elegido existe y tiene un precio válido
    if (precioCursoElegido > 0) {
        carrito.push({ curso: cursoElegido, precio: precioCursoElegido }); // Agregar el curso y su precio al carrito
        alert(`Curso "${cursoElegido}" agregado al carrito.`); // Mostrar mensaje de confirmación
    } else {
        alert("El curso elegido no es válido o no está disponible.");
    }
}

// Calcular subtotales y total de la compra usando forEach
let subtotal = 0;
carrito.forEach(item => {
    subtotal += item.precio;
});

// Verificar si se llevan dos o más cursos para aplicar el descuento del 20%
let total = subtotal; // Calcular el total sin descuento
if (carrito.length > 2) {
    const descuento = total * 0.2; // Calcular el 20% de descuento
    total -= descuento; // Restar el descuento al total
}

// Mostrar detalle del carrito y total de la compra
let detalleCarrito = "";
carrito.forEach(item => {
    detalleCarrito += `${item.curso}: $${item.precio}\n`;
});

alert(`Detalle del carrito:\n${detalleCarrito}Subtotal: $${subtotal}\nTotal (2 cursos o mas descuento del 20%): $${total}`);
