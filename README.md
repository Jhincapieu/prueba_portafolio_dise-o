# Nicolle — Portfolio

Portafolio web estático construido con HTML, CSS y JavaScript puro.

## Estructura

```text
nicolle-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── icons/
│       └── favicon.svg
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

## Personalizar

### 1. Cambiar información

Edita `index.html`:

- Nombre
- Descripción
- Correo
- Instagram
- Behance
- LinkedIn
- Textos de servicios
- Proyectos

### 2. Cambiar imágenes

La demo usa composiciones CSS para que funcione inmediatamente sin depender de imágenes externas.

Para usar trabajos reales:

1. Pon las imágenes en `assets/images/`.
2. En `index.html`, cambia cada botón `.project-image` por una imagen o agrega `background-image`.
3. Mantén imágenes optimizadas en WebP/JPG.

Ejemplo:

```html
<button
  class="project-image"
  style="background-image: url('assets/images/aurora.webp');"
  aria-label="Abrir proyecto Aurora">
</button>
```

### 3. Cambiar colores

En `css/style.css`, modifica las variables de `:root`:

```css
:root {
  --paper: #f3eee7;
  --paper-2: #eae3da;
  --ink: #171614;
  --muted: #777168;
  --accent: #c66a4a;
}
```

## Probar localmente

Puedes abrir `index.html` directamente en el navegador.

También puedes usar VS Code + Live Server.

## Publicar en GitHub Pages

### Opción recomendada: GitHub Actions

1. Crea un repositorio en GitHub, por ejemplo:

```text
nicolle-portfolio
```

2. Copia todos los archivos del proyecto al repositorio.

3. Haz commit y push a `main`:

```bash
git init
git add .
git commit -m "Crear portafolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/nicolle-portfolio.git
git push -u origin main
```

4. En GitHub abre:

`Settings → Pages`

5. En **Build and deployment → Source**, selecciona:

`GitHub Actions`

6. El archivo `.github/workflows/deploy.yml` hará el despliegue automáticamente.

La página quedará en:

```text
https://TU-USUARIO.github.io/nicolle-portfolio/
```

Cada vez que hagas:

```bash
git add .
git commit -m "Actualizar portafolio"
git push
```

GitHub volverá a desplegar la página.

## Notas

- No necesita Node.js.
- No necesita servidor.
- No necesita base de datos.
- No necesita backend.
- Es compatible con GitHub Pages.
- El menú, filtros, modal y animaciones funcionan con JavaScript vanilla.
