# AGENTE.md — Bitácora Técnica y Metodología de Desarrollo con Agente IA

> **Evaluación Continua H3 (Ponderación 80%) — UNIFRANZ**
> **Proyecto:** Enciclopedia Interactiva Multimedia de la Guerra del Chaco (1932–1935)
> **Framework Oficial:** Angular 22 (`@angular/core` ^22.2.0 / Angular CLI 22.2.2)
> **Directorio Raíz:** `D:\guerra-del-chaco-enciclopedia`

---

## 1. Identificación del Agente y Dinámica de Trabajo (Pair Programming)

- **Agente IA:** Antigravity (Agente de Ingeniería de Software y Programación Colaborativa de Google DeepMind).
- **Desarrollador / Autor:** Alan (`somoseldia27@gmail.com`).
- **Objetivo del Proyecto:** Desarrollar una aplicación web interactiva multimedia (estilo enciclopedia interactiva multimedia) orientada a la divulgación histórica de la **Guerra del Chaco (1932–1935)**, ofreciendo una experiencia educativa fluida, inmersiva y altamente visual para estudiantes e investigadores utilizando **Angular 22**.

---

## 2. Arquitectura Tecnológica en Angular 22

El agente diseñó e implementó una arquitectura moderna basada en los estándares más recientes de **Angular 22**:

1. **Componentes Standalone y Estado Reactivo con Signals (`signal`, `computed`):**
   - Toda la gestión del estado interactivo de la enciclopedia se realiza sin dependencias pesadas externas, empleando primitivas reactivas nativas de Angular 22 (`activeTab`, `searchQuery`, `selectedYear`, `selectedEvent`, `selectedLocation`, `simulationYearProgress`, `quizAnswers`).
   - Los filtros multicriterio (`filteredEvents`, `filteredProtagonists`, `filteredArsenal`, `quizScore`) se recalculan instantáneamente mediante `computed()`.
2. **Nuevo Control Flow Nativo de Angular (`@if`, `@for`, `@switch`, `@empty`):**
   - Plantilla optimizada en [`src/app/app.html`](src/app/app.html) utilizando bloques `@for (...; track ...)` y `@switch` para alternar dinámicamente las ilustraciones vectoriales tácticas y las 6 secciones de la enciclopedia.
3. **Motor Multimedia Nativo (Web Audio API + Web Speech API + Cartografía SVG):**
   - **Sintetizador Telegráfico Morse (`AudioContext`):** Genera en tiempo real las frecuencias acústicas de los partes telegráficos históricos del Fortín Boquerón, Kilómetro 7, Cañada Strongest y el cese de hostilidades en Puesto Merino sin depender de archivos MP3 externos que puedan fallar sin internet.
   - **Locución Documental (`window.speechSynthesis`):** Permite a los estudiantes e investigadores escuchar la narración hablada en español de cada expediente histórico y de los capítulos del documental interactivo.
   - **Cartografía Táctica Vectorial Interactiva (SVG):** Mapa interactivo del Chaco Boreal con simulador de línea del frente año por año (1932, 1933, 1934 y 1935), hidrografía (ríos Pilcomayo, Paraguay y Parapetí), serranía del Aguaragüe y telemetría climática/logística de cada fortín.

---

## 3. Estructura de Módulos de la Enciclopedia Interactiva

| Módulo / Pestaña | Descripción Funcional e Histórica | Archivos Principales |
| :--- | :--- | :--- |
| **01. Línea de Tiempo (1932–1935)** | Cronología interactiva con filtro por año de campaña, buscador en tiempo real, esquemas tácticos SVG y expedientes comparativos de bajas, comandantes y citas de fuentes primarias (Pitiantuta, Boquerón, Km 7, Nanawa, Cañada Strongest, Villa Montes y Paz de 1935). | `src/app/chaco-data.ts`, `src/app/app.ts`, `src/app/app.html` |
| **02. Cartografía Táctica** | Sistema de información histórico-geográfico interactivo con simulador de evolución de la línea del frente (1932–1935) y fichas de telemetría (altitud, temperatura máxima, rol geoestratégico). | `src/app/app.html`, `src/app/app.css` |
| **03. Protagonistas Históricos** | Biografías documentadas con filtro por bando/rol: Mcal. Bernardino Bilbao Rioja, Tcnl. Manuel Marzana, Tcnl. Germán Busch, My. Rafael Pabón, Mcal. José Félix Estigarribia y el Cuerpo de Sanidad Militar / Madrinas de Guerra. | `src/app/chaco-data.ts` |
| **04. Aviación, Blindados y Arsenal** | Fichas técnicas del caza Curtiss Hawk II, trimotor Junkers Ju 52 (LAB), tanque Vickers Mark E de 6 toneladas, ametralladora ZB-26 ("Piripipí"), mortero Stokes-Brandt 81 mm y camiones aguateros. | `src/app/chaco-data.ts` |
| **05. Sala Multimedia y Telégrafo** | Reproductor documental por capítulos con narración de voz integrada y decodificador de partes telegráficos en código Morse con audio generado en vivo. | `src/app/app.ts`, `src/app/app.html` |
| **06. Autoevaluación Académica** | Cuestionario interactivo calificable con retroalimentación histórica inmediata para medir la comprensión del estudiante. | `src/app/chaco-data.ts`, `src/app/app.ts` |

---

## 4. Bitácora Paso a Paso de Acciones Ejecutadas por el Agente

### Fase 1: Verificación del Entorno e Inicialización en `D:\`
1. Se verificó la disponibilidad del disco `D:\`, Node.js `v24.21.0`, npm `11.19.0`, Git `2.55.0` y **Angular CLI `22.2.2`**.
2. Se ejecutó en `D:\` el comando oficial:
   ```bash
   ng new guerra-del-chaco-enciclopedia --style=css --routing=false --ssr=false --defaults --skip-tests
   ```
3. Se configuraron las tipografías históricas (`Cinzel`, `Inter` y `JetBrains Mono`) y metadatos en español en `src/index.html`.

### Fase 2: Modelado de Datos Históricos y Desarrollo de Componentes
1. Se creó el repositorio estructurado de datos históricos en `src/app/chaco-data.ts` con interfaces TypeScript estrictas (`HistoricalEvent`, `TacticalLocation`, `HistoricalProtagonist`, `ArsenalItem`, `QuizQuestion`).
2. Se programó la lógica reactiva con Signals en `src/app/app.ts`, incluyendo el sintetizador Web Audio API y el narrador documental.
3. Se maquetó la interfaz inmersiva en `src/app/app.html` y el sistema de diseño estilo museo/archivo histórico en `src/app/app.css` y `src/styles.css`, aplicando animaciones en el compositor (`transform` y `opacity`) y soporte de accesibilidad `prefers-reduced-motion`.

### Fase 3: Compilación, Control de Versiones Git/GitHub y Empaquetado `.zip`
1. Se validó la compilación de producción con `ng build`, confirmando cero errores de TypeScript o plantillas.
2. Se registraron todos los cambios en el repositorio Git local (`git add .` y `git commit`) listo para su sincronización con GitHub.
3. Se generó el archivo comprimido entregable `D:\guerra-del-chaco-enciclopedia.zip` (excluyendo `node_modules` para una subida rápida al Aula Virtual UNIFRANZ).

---

## 5. Instrucciones de Ejecución Local

```bash
# 1. Entrar al directorio del proyecto en el disco D:
cd D:\guerra-del-chaco-enciclopedia

# 2. Instalar dependencias (si se descomprime desde el archivo .zip)
npm install

# 3. Iniciar el servidor de desarrollo de Angular 22
npm start
# Abrir en el navegador: http://localhost:4200
```

