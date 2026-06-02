# Biblioteca CORE

Documentación oficial del ecosistema CORE — Blueprint Estratégico, Técnico y Operativo 2026–2035.

**Versión:** 1.0  
**Fecha:** Mayo 2026  
**Confidencial — Uso interno**

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

---

## Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Iniciar producción
npm start
```

Abrir en [http://localhost:3000](http://localhost:3000)

---

## Estructura

```
/app
  /layout.tsx          → Layout raíz con sidebar
  /page.tsx            → Página de bienvenida
  /globals.css         → Estilos globales
  /components
    /Sidebar.tsx        → Navegación lateral fija
    /PageHeader.tsx     → Encabezado reutilizable de página
    /DocCard.tsx        → Tarjeta de documento reutilizable
  /docs
    /prompts/page.tsx   → Prompts oficiales
    /architecture/page.tsx → Arquitectura técnica
    /strategy/page.tsx  → Estrategia y expansión
    /roadmap/page.tsx   → Roadmap 2026–2035
    /products/page.tsx  → Productos y verticales
```

---

## Secciones

| Sección | Contenido |
|---------|-----------|
| **Prompts** | Prompts oficiales de producción (PM, ENG, Design) |
| **Arquitectura** | Technical Architecture, DB Model, IA, integraciones |
| **Estrategia** | Visión 2035, Expansion Blueprint, Monetización |
| **Roadmap** | Fases: Consolidación → Expansión → Liderazgo |
| **Productos** | Logistics, Rep, Market, Intelligence, Finance |

---

*CORE — Global Supply. Regional Growth.*
