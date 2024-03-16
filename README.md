# Entrevista Técnica Trueway Realty

Entrevista de trabajo creada por Denis Peralta para el puesto de Desarrollador/a Front End para la compania.

## Contexto 

Actualmente existe una pantalla para crear/editar e imprimir contratos, se requiere extender la funcionalidad de esta 
para crear un nuevo contrato mas commplejo. 

## Objetivos 

- Crear un nuevo componente similar a AddendumToContract que debera generar un PDF similar  "EjemploContratoAsIs.jpeg" que se encuentra en la raiz del repositorio. 
- El mismo debe ser editable y además se deberán incluir preguntas que se relacionen directamente con los campos del PDF. Por ejemplo en los dos primeros inputs podriamos hacer preguntas como: ¿Quíen es el comprador? y ¿Quíen es el vendedor?
- Se deberan crear nuevos componentes como por ejemplo un Input Checkbox para la sección "Purchase Price" del contrato.
- Incluir traducciones en español e ingles para cada pregunta.
- Mejorar el UI utilizando Bootstrap + CSS.
   
### Objetivos secundarios

- Dar un estilo similar a nuestra visor PDF que sea similar al que se encuentra en Chrome al abrir un archivo de PDF. Como por ejemplo el fondo negro, iconos correspondientes para cada boton (imprimir, descargar) y un index para saber en que página del PDF esta nuestra vista actualmente.
- Agregar una progress bar que nos indique como va avanzando el usuario al completar las secciones de preguntas. https://react-bootstrap.netlify.app/docs/components/progress

## Dependencias a utilizar: 

  - "html-to-image": "^1.11.11"
  - "jspdf": "^2.5.1"
  - "react": "^18.2.0"
  - "react-bootstrap": "^2.8.0"
  - "react-dom": "^18.2.0"
  - "react-select": "^5.8.0"
  - "i18next": "^22.5.1"
