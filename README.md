# Calculadora de Factorial

Aplicación web desarrollada con **HTML, CSS y JavaScript** que permite al usuario ingresar un número y calcular su factorial mediante una interfaz sencilla e interactiva.

## Descripción

Este proyecto fue desarrollado como práctica de fundamentos de **JavaScript**, trabajando con captura de datos desde un formulario, conversión y validación de tipos, estructuras de control, operaciones matemáticas y manipulación del DOM.

El usuario puede ingresar un número desde la interfaz y obtener su factorial directamente en la página.

## Funcionalidades

* Captura de datos mediante un campo de entrada.
* Conversión del valor ingresado a tipo `number`.
* Validación de datos.
* Validación de números enteros.
* Validación de números negativos.
* Cálculo del factorial mediante un ciclo `for`.
* Visualización del resultado directamente en el DOM.
* Mensajes de error para entradas inválidas.

## Tecnologías utilizadas

* **HTML5** — Estructura de la aplicación.
* **CSS3** — Diseño y estilos de la interfaz.
* **JavaScript** — Lógica, validaciones y cálculo del factorial.

## Estructura del proyecto

```text
factorial/
│
├── index.html
│
├── css/
│   └── styles.css
│
└── js/
    └── app.js
```

## Funcionamiento

El usuario introduce un número en el campo de entrada y presiona el botón **"Calcular factorial"**.

El programa:

1. Obtiene el valor introducido por el usuario.
2. Convierte el valor de `string` a `number`.
3. Valida que sea un número válido.
4. Comprueba que sea un número entero y no negativo.
5. Calcula el factorial.
6. Muestra el resultado en la página.

Por ejemplo:

```text
Entrada: 5

5! = 120
```

Otro ejemplo:

```text
Entrada: 6

6! = 720
```

## Validaciones

El programa muestra un mensaje de error cuando el usuario introduce:

* Texto.
* Un número decimal.
* Un número negativo.

Ejemplo:

```text
Entrada: hola

Error: debes ingresar un número.
```

## Conceptos practicados

Este proyecto permite practicar conceptos fundamentales de JavaScript:

* Variables.
* `const` y `let`.
* `document.getElementById()`.
* `addEventListener()`.
* `.value`.
* `Number()`.
* `typeof`.
* `isNaN()`.
* `Number.isInteger()`.
* Condicionales `if`.
* Ciclo `for`.
* Operadores matemáticos.
* Manipulación del DOM.

## Ejecución

No requiere instalación de dependencias.

Simplemente descarga o clona el repositorio y abre:

```text
index.html
```

en un navegador web.

## Autor

**José Manuel Limón Ávila**

Desarrollador Java Full Stack Jr.

[LinkedIn](https://www.linkedin.com/in/joselimonav/)
