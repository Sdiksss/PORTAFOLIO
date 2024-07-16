document.addEventListener('DOMContentLoaded', function () {

  // Definir el array de datos
  const data = [
    {
      image: './assets/img/travelingapp.png',
      title: 'travelingapp',
      description: 'Aplicación React con Axios para consultas API, permite iniciar sesión, hacer y gestionar reservaciones con filtros independientes de las reservaciones para mejorar la experiencia del usuario',
      tecnologias: 'React, Axios',
      linkFront: "https://traveling-app-alpha.vercel.app/#/"
    },
    {
      image: './assets/img/user_Crud.png',
      title: 'User CRUD Application',
      description: 'Aplicación web para la gestión de usuarios que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar).',
      tecnologias: 'Node.js, Express, MongoDB, HTML, CSS, JavaScript',
      linkFront: ""
    }
  ];

  

  const conteinerProjects = document.getElementById('conteiner_projects');
  const left = document.querySelector('.left');
  const rigth = document.querySelector('.rigth');
  const articleUl = document.querySelector('.article__ul');

  // Simular una promesa que se resuelve con el array de datos
  const dataPromise = new Promise((resolve, reject) => {
    // Aquí resolvemos la promesa con el array de datos directamente
    resolve(data);
  });

  dataPromise
    .then((data) => {
      // Usar el array de datos para crear el contenido
      data.forEach(element => {
        conteinerProjects.innerHTML += `
          <li class='article__li'>
            <img src='${element.image}' alt='${element.title}' class='article__img'>
            
            <h3 data-translate-en="${element.title}" data-translate-es="${element.title}" class='article__h3'>${element.title}</h3>
            <p data-translate-en="${element.description}" data-translate-es="${element.description}">${element.description}</p>
            <h4 data-translate-en="${element.tecnologias}" data-translate-es="${element.tecnologias}" class='article__h4'>${element.tecnologias}</h4>
            <div data-translate-en=""> 
               <a id="linkButton" href="${element.linkFront}" data-translate-en="" data-translate-es="">Link despliegue</a>
            </div>
          </li>
        `;
      });

      let index = 0;

      left.addEventListener('click', function () {
        index = (index > 0) ? --index : data.length - 1;
        articleUl.style.transform = `translateX(-${index * 100}%)`;
      });

      rigth.addEventListener('click', function () {
        index = (index < data.length - 1) ? ++index : 0;
        articleUl.style.transform = `translateX(-${index * 100}%)`;
      });

    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('Terminé de procesar los datos');
    });

});
