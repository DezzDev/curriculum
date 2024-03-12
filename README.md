

## notes
- Creamos alias para la ruta principal, así con poner @ estaremos indicando src
```typescript

	{
  "extends": "astro/tsconfigs/strict",
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
			"@/*":[
				"src/*"
			]
		}
}
	}


```

## Video
- https://www.youtube.com/watch?v=Zwh92LTB-Bk
- 1:05

## Dependencias
- ninjakeys, nos permite mediante un shorthand abrir una barra de búsqueda 
