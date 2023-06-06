const suma = function (num1, num2) {
  //console.log(arguments);
  return num1 + num2;
};

//Funcion flecha
const funcionFlecha = (a, b) => {};

const resta = (num1, num2) => {
  return num1 - num2;
};
const producto = (num1, num2) => {
  return num1 * num2;
};

const dividir = (num1, num2) => {
  return num1 / num2;
};

// console.log("esto es una funcion", dividir);

// console.log("----------");

//Funcion de orden superior
// function calculadora(operacion, num1, num2) {
//   let resultado = operacion(num1, num2);
//   console.log(resultado);
// }
// calculadora(suma, 2, 5);
// calculadora(resta, 10, 5);
// calculadora(producto, 5, 5);
// calculadora(dividir, 100, 2);

//Metodos de Array
const mascotas = [
  {
    nombre: "Max",
    especie: "Perro",
    edad: 4,
  },
  {
    nombre: "Luna",
    especie: "Gato",
    edad: 2,
  },
  {
    nombre: "Coco",
    especie: "Loro",
    edad: 8,
  },
  {
    nombre: "Bella",
    especie: "Conejo",
    edad: 6,
  },
  {
    nombre: "Rocky",
    especie: "Hamster",
    edad: 1,
  },
];
// console.log(mascotas);
// mascotas.forEach((mascota, indice, arrayOriginal) => {
//   console.log(mascota);
//   console.log(indice);
//   //   console.log(arrayOriginal);
// });
// console.log("----------");

console.log("-----FOR EACH A MANO-----");

const fn = (mascota, indice) => {
  console.log(
    `La mascota se llama ${mascota.nombre} y su edad es ${mascota.edad}, su indice es ${indice}`
  );
};

const forEach = (mascotas, fn) => {
  for (let i = 0; i < mascotas.length; i++) {
    fn(mascotas[i], i);
  }
};
forEach(mascotas, fn);

console.log("-----METODO FOR EACH-----");
//FOR EACH
mascotas.forEach((mascota, indice) =>
  console.log(
    `La mascota se llama ${mascota.nombre} y su edad es ${mascota.edad}, su indice es ${indice}`
  )
);

//for each

mascotas.forEach((mascota) => console.log(mascota));

//map --- más usarán
console.log("---- map ----");
const mascotasCopiadas = mascotas.map((mascota) => mascota);
const mascotasEdades = mascotas.map((mascota) => mascota.edad);
console.log(mascotasEdades);

//filter --- más usarán
console.log("---- filter ----");
const mascotasFiltradas = mascotas.filter((mascota) => mascota.edad == 1);
console.log(mascotasFiltradas);

//Find
console.log("---- Find ----");
const elementoEncontrado = mascotas.find((mascota) => mascota.edad == 1);
console.log(elementoEncontrado);

//Every
console.log("---- Every ----");
const mascotaPorEdadDos = mascotas.every((mascota) => mascota.edad == 1);
console.log(mascotaPorEdadDos);

//Some
console.log("---- Some ----");
const mascotaIgualUno = mascotas.some((mascota) => mascota.edad == 1);
console.log(mascotaIgualUno);

//Sort
console.log("---- Sort ----");
console.log("Array desordenado");
console.log(mascotasEdades);
//Iterar el array y compara a con b, que son elementos
//Sort entiende esto:
// a > b = 1
// a < b = -1
// a === b entonces esto es 0
console.log("Array ordenado");
const ordenarMascotasPorNombre = mascotasCopiadas
  .map((mascota) => mascota.nombre)
  .sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
console.log(ordenarMascotasPorNombre);

// console.log("coco" > "coca");

console.log("---------------");
console.log(mascotas);
const ordenarMascotas = mascotasCopiadas.sort((a, b) => {
  if (a.edad > b.edad) {
    return 1;
  }
  if (a.edad < b.edad) {
    return -1;
  }
  return 0;
});
console.log(ordenarMascotas);

//Find Index

const buscarIndice = mascotas.findIndex((mascota) => mascota.edad > 4);
console.log(buscarIndice);
