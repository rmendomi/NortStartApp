# Login Supabase + Bootstrap (Vite, Vanilla JS)
Infra lista para pegar en tu proyecto local. Incluye login con email/contraseña, signup y magic link.

## 1) Configurar variables
Edita `.env` con tu proyecto real de Supabase:
```
VITE_SUPABASE_URL= https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY= xxxxx
```
> En Supabase: Project Settings → API → Project URL & anon key.

## 2) Instalar y correr
```
npm i
npm run dev
```
Abre `http://localhost:5173`.

## 3) ¿Dónde pego estos archivos en mi estructura?
- Copia **todo** este contenido en la raíz de tu proyecto local (donde está tu `package.json` actual).
- Si ya tienes `package.json`, fusiona dependencias: `@supabase/supabase-js` y `bootstrap`.
- Asegúrate de tener `index.html` referenciando Bootstrap y `src/main.js` como entry.

## 4) Flujo
- Si no hay sesión, se muestra el **Login** (Bootstrap).
- `Sign In` → `supabase.auth.signInWithPassword`.
- `Sign Up` → crea cuenta y pide confirmar email.
- `Magic link` → `supabase.auth.signInWithOtp`.
- Al loguear, se muestra **Home protegido** (placeholder). Botón **Salir** en navbar.

## 5) Integrar con tu app OKR/roadmap
- Reemplaza el contenido de `HomePage` con tu vista.
- Si tienes router propio, usa el `getSession()` para proteger rutas.
- Para consumir tu backend GAS desde aquí, añade tu `VITE_API_BASE` y reusa tu `api.js`.

## 6) Seguridad
- Usa siempre HTTPS en producción.
- Mantén la anon key solo para operaciones públicas; para admin, usa edge functions o servidor intermedio.
