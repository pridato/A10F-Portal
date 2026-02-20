# Academia 10 Formación - Sistema de Portales

Sistema de gestión y portales web para Academia 10 Formación, diseñado para proporcionar interfaces personalizadas según el rol del usuario (Alumno, Profesor, Administrador).

## 🎯 Características

- **Multi-rol**: Dashboards personalizados para Alumnos, Profesores y Administradores
- **Interfaz moderna**: Diseño responsive con Tailwind CSS y componentes shadcn/ui
- **Autenticación**: Sistema de login con selección de rol
- **Dashboard interactivo**: Tarjetas de acción, estadísticas rápidas y navegación intuitiva
- **Tema adaptable**: Soporte para modo claro/oscuro con next-themes

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 16.0.3 (App Router)
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4.1.9
- **Componentes UI**: Radix UI + shadcn/ui
- **Iconos**: Lucide React
- **Formularios**: React Hook Form + Zod
- **Gráficos**: Recharts
- **Animaciones**: Tailwind CSS Animate

### Gestión de Paquetes
- **pnpm** 9.15.0

## 📋 Requisitos Previos

- Node.js 18+ 
- pnpm instalado globalmente:
  ```bash
  npm install -g pnpm
  ```

## 🚀 Instalación

1. **Clonar el repositorio** (si aplica):
   ```bash
   git clone <url-del-repositorio>
   cd ui-design-improvement
   ```

2. **Instalar dependencias**:
   ```bash
   pnpm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   pnpm dev
   ```
   
   O usar el script de inicio:
   ```bash
   ./start.sh
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm start` - Inicia el servidor de producción (requiere build previo)
- `pnpm lint` - Ejecuta ESLint para verificar el código
- `./start.sh` - Script de inicio rápido (instala dependencias si es necesario y ejecuta dev)

## 📁 Estructura del Proyecto

```
ui-design-improvement/
├── app/                    # Rutas de Next.js (App Router)
│   ├── page.tsx           # Página principal con login y dashboards
│   ├── layout.tsx         # Layout raíz
│   ├── login/             # Página de login
│   ├── alumno/            # Portal del alumno
│   ├── profesor/          # Portal del profesor
│   ├── administrador/     # Portal del administrador
│   └── dashboard/         # Dashboard general
├── components/            # Componentes React
│   ├── ui/               # Componentes UI base (shadcn/ui)
│   ├── action-card.tsx   # Tarjeta de acción
│   ├── dashboard-card.tsx # Tarjeta de dashboard
│   ├── login-form.tsx    # Formulario de login
│   └── layout/           # Componentes de layout
├── data/                 # Datos y configuraciones
│   ├── dashboard-admin.ts
│   ├── dashboard-student.ts
│   ├── dashboard-teacher.ts
│   ├── dashboard-tabs.ts
│   └── portal-cards.ts
├── constants/            # Constantes de la aplicación
│   ├── site.ts          # Información del sitio
│   └── roles.ts         # Definición de roles
├── types/               # Definiciones TypeScript
├── lib/                 # Utilidades y helpers
├── hooks/               # Custom React hooks
└── start.sh             # Script de inicio rápido
```

## 🎨 Roles y Funcionalidades

### 👨‍🎓 Alumno
- Acceso a cursos y materiales
- Visualización de clases grabadas
- Gestión de facturas
- Consulta de horarios
- Comunicación con profesores
- Acceso a plataforma E-learning

### 👨‍🏫 Profesor
- Pasar lista de asistencia
- Gestión de cursos y grupos
- Comunicación con estudiantes
- Acceso directo a Zoom
- Consulta de horarios
- Gestión de material educativo

### 👨‍💼 Administrador
- Gestión de usuarios
- Integración con WhatsApp e Instagram
- Gestión de documentos y correo
- Acceso a Drive y software de gestión
- Facturación
- Control total del sistema

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto si necesitas configurar variables de entorno:

```env
# Ejemplo (ajusta según tus necesidades)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🏗️ Desarrollo

### Convenciones de Código

- **Separación de datos**: Los datos se almacenan en archivos independientes dentro de `data/` y `constants/`
- **TypeScript estricto**: Se utiliza TypeScript con tipado estricto
- **Componentes funcionales**: Todos los componentes usan funciones de React
- **Nombres descriptivos**: Variables y funciones con nombres claros y descriptivos

### Estructura de Datos

Los datos se organizan en archivos separados por funcionalidad:
- `data/dashboard-*.ts` - Configuraciones de dashboards por rol
- `data/portal-cards.ts` - Tarjetas de portal por rol
- `constants/site.ts` - Información del sitio y textos

## 📝 Licencia

Este proyecto es privado y pertenece a Academia 10 Formación.

## 👥 Contribución

Este es un proyecto privado. Para contribuciones, contacta con el equipo de desarrollo.

---

**Desarrollado para Academia 10 Formación** 🎓
