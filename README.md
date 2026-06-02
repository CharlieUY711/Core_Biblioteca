# CORE Biblioteca — Sistema de Autenticación

## Archivos generados

```
/lib/supabaseClient.ts          → Cliente Supabase configurado
/types/supabase.ts              → Tipos de base de datos
/app/login/page.tsx             → Pantalla de login (fullscreen)
/app/aviso/page.tsx             → Pantalla de advertencia (ES/EN/PT)
/middleware.ts                  → Protección de rutas
/components/ui/Input.tsx        → Componente Input reutilizable
/components/ui/Button.tsx       → Componente Button reutilizable
```

## Setup

### 1. Variables de entorno

Crear `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://axlbccznfgzgqurxxzzi.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<tu_anon_key_de_supabase>
```

La `anon key` se obtiene en: Supabase Dashboard → Settings → API → `anon public`

### 2. Dependencias necesarias

```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

### 3. Flujo de autenticación

```
/login  →  (credenciales correctas)  →  /aviso  →  (acepta)  →  /
                                                  →  (cancela) →  /login
```

Cualquier ruta protegida sin sesión activa → redirige automáticamente a `/login`.

### 4. Push al repo

```bash
cd C:\CORE\Biblioteca
git add .
git commit -m "feat: sistema de login + aviso + protección de rutas"
git push origin main
```

---

**CORE · Biblioteca Interna · Confidencial · 2026**
