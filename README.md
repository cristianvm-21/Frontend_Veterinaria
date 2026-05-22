# README: Proyecto Veterinara

<!-- Tabla de Contenido-->

<details>
<summary><h2 id="tabla-de-contenido">Tabla de Contenido</h2></summary>
<!-- Lista con Contenido Deplegable-->
 <ol>
   <li><a href="#acerca-del-proyecto">Acerca del Proyecto<a></li>
   <li><a href="#características-principales">Características Principales<a></li>
   <li><a href="#instalar-dependencias-npm">Inicio Rapido 🚀</a></li>
   <li><a href="#estructura-del-proyecto">Estructura del Proyecto 📁</a></li>
   <li><a href="#stack-tecnológico">Stack Tecnológico<a></li>
 </ol>
</details>

## Acerca del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web diseñada para digitalizar y optimizar la gestión interna de un veterinaria. 
La aplicación busca ofrecer una solución centralizada que permita:

- Registrar y consultar citas de forma rapida
- Realizar Seguimiento a las citas programadas
- Acceder a funcionalidades administrativas desde un perfil de administrador.


## Características Principales

- 🗃️ Registro y control de atenciones
- 📦 Gestión de pacientes y servicios veterinarios
- 💻 Interfaz amigable y responsiva

## Instalar Dependencias NPM

```bash
npm install
```
## Ejecutar
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="right"><a href="#tabla-de-contenido">Indice</a></p>

## Estructura Del Proyecto
````
*FRONTEND_VETERINARIA*/ 
├── app/                   # Enrutador App de Next.js con grupos de rutas
│   ├── (auth)/            # Rutas de autenticación
│   ├── (dashboard)/       # Rutas protegidas del panel (dashboard)
│   ├── (public)/          # Rutas de páginas públicas
│   ├── globals.css        # Estilos globales CSS
├── features/              # Organización basada en funcionalidades del sistema (componentes, etc)
├── assets/                # Recursos estaticos
├── components/            # Componentes de UI compartidos
├── hooks/                 # React Hooks personalizados
├── lib/                   # Funciones utilitarias 
├── public/                # Recursos publicos
├── services/              # Archivos TS para conectar con Rutas API
└── types/                 # Define la estructura de Entidades del Negocio
└── styles/                # Estilos globales CSS
````

<p align="right"><a href="#tabla-de-contenido">Indice</a></p>

## Stack Tecnológico

- ![HTML](https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![TypeScript](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
- ![React](https://img.shields.io/badge/REACT-%2361DAFB?style=for-the-badge&logo=react&logoColor=%23fff&labelColor=%2303C4E8&color=%2303C4E8)
- ![Next.js](https://img.shields.io/badge/NEXT.JS-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/TAILWIND_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
- ![shadcn/ui](https://img.shields.io/badge/SHADCN/UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
- ![Node](https://img.shields.io/badge/Node-%235FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)

<p align="right"><a href="#tabla-de-contenido">Indice</a></p>

