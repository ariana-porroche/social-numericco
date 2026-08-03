# Reto 1

# Social Numéricco

Social Numéricco es una red social corporativa moderna diseñada para conectar a los empleados de la empresa. Cuenta con una interfaz elegante y moderna, y permite consultar y gestionar perfiles de usuarios y listas de empleados y amigos.

## Instalación y Ejecución

Sigue estos pasos para arrancar el proyecto en tu entorno local:

1. **Clona el repositorio** o descarga el código fuente.
2. **Instala las dependencias**:

   Abre una terminal en la raíz del proyecto y ejecuta:
   ```bash
   npm install
   ```
3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
4. **Abre la aplicación**:

   Tu terminal te indicará la URL local (normalmente `http://localhost:5173/`). Ábrela en tu navegador para ver la web.

## Descripción de las pantallas

### 1. Home (Inicio)
Es la puerta de entrada a la red social.
- Si no has iniciado sesión, te invita a entrar mediante el botón "Iniciar sesión".
- Si ya estás logueado, te muestra tu menú de navegación y te da acceso directo a "Ver mi perfil" o "Ver todos los empleados".

![Captura de Home sin iniciar sesión](/public/screenshots/home.png) ![Captura de Home con la sesión iniciada](/public/screenshots/home-logged.png)

### 2. Login (Inicio de sesión)
Pantalla segura y limpia donde puedes introducir tus credenciales. La autenticación se realiza simulando una API real (usando DummyJSON). Una vez validado, guarda de forma segura tu sesión en el navegador.

![Captura de Login](/public/screenshots/login.png)

### 3. Mi Perfil
Tu espacio personal. Muestra de forma elegante y clara toda la información de tu cuenta (foto de perfil, nombre, correo, teléfono y edad). Todo presentado con un atractivo diseño de tarjetas translúcidas sobre fondos dinámicos.

![Captura de Mi Perfil](/public/screenshots/profile.png)

### 4. Empleados
El directorio de la empresa.
- **Listado completo**: Visualiza en una cómoda tabla a todos tus compañeros de trabajo.
- **Paginación inteligente**: Navega de forma ultra rápida entre las distintas páginas del directorio sin tiempos de carga innecesarios.
- **Gestión de amistades**: Puedes "Añadir amigo" o "Eliminar amigo" fácilmente con un solo clic. El sistema recuerda tus amigos aunque cierres el navegador.

![Captura de Empleados](/public/screenshots/employees.png)

---

**Tecnologías principales:**
- React 18 + Vite
- React Router (para navegación)
- Lucide React (iconografía)

---


## Metodología de Trabajo

Para el desarrollo del **Reto 1** se ha seguido una metodología ágil y estructurada en 4 fases, garantizando la calidad del software, la usabilidad de la interfaz y la modularidad del código:

1. **Catálogo de Requisitos (Análisis inicial):**
   * Definición y desglose de historias de usuario, funcionalidades principales y requerimientos de integración con la API de `dummyjson.com`.
   * Puedes consultar el catálogo completo de requisitos en el siguiente enlace:  
     🔗 [Documento de Catálogo de Requisitos](https://docs.google.com/document/d/1t_xp9Jy4nKD_bHEcDUNzwzJXMK143iGAaH6VBMHfK8Y/edit?usp=sharing)

2. **Prototipado Básico (Figma):**
   * Diseño básico de las interfaces en Figma.
   * Definición del sistema de diseño: paleta de colores corporativos, tipografía y componentes reutilizables (tarjetas de perfil, tablas paginadas, botones de acción).

3. **Desarrollo (React + Vite):**
   * Implementación de la arquitectura de la aplicación priorizando la modularidad y la gestión del estado (persistencia en `localStorage`, autenticación ficticia y paginación rápida).
   * Creación de componentes con enfoque *clean code* y buenas prácticas modernas de React 18.

4. **Documentación y Pruebas:**
   * Verificación manual de los flujos de inicio de sesión, permanencia de sesión y actualización dinámica de la lista de amigos.
   * Redacción de las especificaciones técnicas en el presente repositorio.


# Reto 2


Para dar soporte a la red social interna **Social Numéricco**, he diseñado una arquitectura de base de datos relacional orientada a escalabilidad, seguridad y separación de responsabilidades.

---

### 1. Modelo Conceptual (Diagrama Entidad-Relación)

El modelo conceptual define las entidades principales, sus atributos y las relaciones de negocio entre ellas:

* **USERS (`1:1`) EMPLOYEES:** Se separa la información de acceso/autenticación (`USERS`) de los datos de perfil profesional (`EMPLOYEES`). Esto mejora la seguridad (manteniendo credenciales aisladas) y permite la escalabilidad modular.
* **USERS (`1:N`) FRIENDSHIPS:** Para respaldar la funcionalidad de *"añadir como amigo"* de forma asimétrica (estilo "seguir" o "contactos"), la entidad `USERS` interactúa con `FRIENDSHIPS` mediante dos relaciones independientes `1:N`:
  * **sender:** El usuario que inicia/envía la acción de agregar.
  * **receiver:** El usuario que recibe la vinculación.

![Captura del Modelo E-R](/public/e-r-diagram.png)

### 2. Modelo Relacional

Traducción del diagrama conceptual a un esquema relacional con claves primarias (PK) y foráneas (FK):

![Captura del Modelo Relacional](/public/relational-diagram.png)
