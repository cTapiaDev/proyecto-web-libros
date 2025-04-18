# 📚 Bookstore App

¡Bienvenido a **Bookstore App**! 📖 Un sistema para gestionar libros, con funcionalidades como listado, detalles, favoritos y más.

## 🚀 Tecnologías  

| Tecnología       | Propósito                     |
|-----------------|--------------------------------|
| **React** + Vite  | UI del proyecto   |
| **TypeScript**   | Tipado estático   |
| **Redux Toolkit** | Gestión de estado   |
| **Tailwindcss** | Librería de estilos |
| **React Table** | Manejo de tablas interactivas   |
| **Formik + Yup**  | Formularios con validación   |
| **Storybook**    | Pruebas de componentes   |
| **Jest**        | Pruebas unitarias   |
| **React Router** | Navegación de la app   |
| **Headless UI** + Heroicons | Estilización |

---

## 🛠️ Instalación y Configuración  

### 1️⃣ Clonar el repositorio  
```bash
git clone https://github.com/cTapiaDev/proyecto-web-libros.git
cd proyecto-web-libros
```
### 2️⃣ Instalar dependencias  
```bash
npm install
```
### 3️⃣ Ejecutar la Aplicación
```bash
npm run dev
```


---

## 🧪 Pruebas
### 🔹Ejecutar Storybook
```bash
npm run storybook
```
### 🔹Ejecutar pruebas con Jest
```bash
npm run test
```

---

## 📖 Respuestas para Aspasia
1. **¿Cómo decidiste las opciones técnicas y arquitectónicas utilizadas como parte de su solución?**

__R:__ Separaré la respuesta en algunos puntos importantes:
- __Stack Tecnológico:__ Desde el inicio elegí React con TypeScript porque me gusta la seguridad que proporciona el tipado estricto, además de la detección temprana de errores y la gran capacidad de modular componentes a través de interfaces.

- __Gestión de Estado:__ Si bien el uso de Redux era parte de la prueba, sirve mucho para el manejo de estados globales, así que se agradece la posibilidad de gestionar eficientemente los estados de la aplicación.

- __UI y Estilización:__ Aquí directamente me fui por el uso de Tailwindcss para el manejo de estilos, y HeadlessUI para los componentes pre-configurados, es más, agregué también el uso de Heroicons que se complementa bien con algunos componentes de HeadlessUI.

- __Ruteo:__ Aproveché el uso de React-Router para manejar la navegación entre páginas de la aplicación.

- __Formulario y Validación:__ Si bien el formulario no lleva a nada porque la API no lo permite, si lo realicé con Formik y aproveché de agregarle Yup para validaciones en cada uno de los campos.

- __Tablas:__ Utilice React-Table, más específicamente TanStack Table/React-Table. Esto debido a la gran flexibilidad y rendimiento que otorga a la hora de manipular una buena cantidad de datos.

- __Pruebas y Documentación:__ Para este caso aplique Jest para los test unitarios y Storybook para la documentación de los componentes.

---

2. **¿Hay alguna mejora que dejaste pendiente de hacer en su envío?**

__R:__ En este momento creo que no dejé nada en el tintero realmente, aunque el diseño podría tener muchas mejores. Podría también agregar aquí que hice un pequeño cambio en la estructura, ya que en una parte de la prueba se pide agregar la pestaña de detalle, pero los datos que se solicitan, la API proporcionada no los trae, así que bajo esa premisa decidí dejar los detalles de cada libro en un modal y el uso de las rutas lo apliqué para el formulario y la vista de favoritos.

---
3. **¿Qué harías de manera diferente si se le asignara más tiempo?**

__R:__ Todo dependería del área, pero comenzaría con un refinamiento de la arquitectura para mejorar poco a poco las funcionalidades de la aplicación y, agregar nuevas.

También le dedicaría más trabajo al diseño; Mejoras en la Responsividad, Implementación de DarkMode, Uso de transiciones o animaciones, etc.

No puedo tampoco olvidarme del rendimiento, aplicando Lazy loading o splitting para mejorar la velocidad de la aplicación. Sobre todo si se realiza un cambio en la API y la cantidad de datos crece exponencialmente.

Crearía pruebas mucho más robustas y comenzaría también a introducir la seguridad dentro de la aplicación (JWT, OAuth, etc)

La verdad es que quedan muchas cosas por mejorar en la aplicación, un BD tampoco se puede olvidar para almacenar nuestra información, en fin, realmente es un buen proyecto para sacarle un provecho maravilloso a las tecnologías de punta.
