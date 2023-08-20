import {
  BOOTSTRAP,
  COMPOSER,
  CSS,
  EHTERS,
  EXPRESS,
  FIGMA,
  FIREBASE,
  GANACHE,
  GIT,
  GITHUB,
  GITHUBPAGES,
  HEROKU,
  HTML,
  JAVASCRIPT,
  JQUERY,
  JSONCONST,
  LARAVEL,
  LESS,
  MONGODB,
  MONGOOSE,
  MYSQL,
  NODE,
  NPM,
  PHP,
  POSTGRESQL,
  POSTMAN,
  PREPROS,
  REACT,
  REDUX,
  SCSS,
  SEQUELIZE,
  SOLIDITY,
  TAILWILDCSS,
  TRUFFLE,
  TYPESCRIPT,
  VERCEL,
  YARN,
} from "./technologies";

export const projects = [
  {
    title: "Portfolio",
    description: {
      technologies: [
        JAVASCRIPT,
        SCSS,
        HTML,
        CSS,
        REACT,
        GIT,
        GITHUB,
        NPM,
        YARN,
        FIGMA,
        GITHUBPAGES,
        FIREBASE,
        VERCEL,
        JSONCONST,
      ],
    },
  },

  {
    title: "Brain Games Es",
    image: "Brain_Games_Es",
    description: {
      technologies: [
        TYPESCRIPT,
        SCSS,
        REACT,
        REDUX,
        NODE,
        MONGODB,
        MONGOOSE,
        EXPRESS,
        GITHUBPAGES,
        HEROKU,
        VERCEL,
        GIT,
        GITHUB,
        POSTMAN,
        YARN,
      ],
      txt: "Les presento un proyecto que llamo Brain Games Es, es un juego que consta (por el momento) de 10 niveles para descifrar una palabra encriptada, puntaje y pistas.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/brain-games",
    deploy: "https://brain-games.vercel.app/",
  },

  {
    title: "Wave Music",
    image: "WaveMusic",
    description: {
      technologies: [
        JAVASCRIPT,
        CSS,
        REACT,
        REDUX,
        NODE,
        MONGODB,
        EXPRESS,
        HEROKU,
        FIREBASE,
        GIT,
        GITHUB,
        NPM,
      ],
      txt: "En este proyecto se utilizó para poder comprender el GitHub flow, la metodología de scrum y las responsabilidades del trabajo en equipo. En el deploy se utilizó Mongo Atlas para la base de datos, Heroku para el servidor y Firebase para el front.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/Repo-para-PG",
    deploy: "https://proyecto-grupal-18c81.web.app/",
  },

  {
    title: "Blackparadox - portfolio",
    image: "Blackparadox-portfolio",
    description: {
      technologies: [
        JAVASCRIPT,
        HTML,
        SCSS,
        JQUERY,
        PHP,
        PREPROS,
        GIT,
        GITHUB,
        NPM,
      ],
      txt: "Proyecto realizado a partir de un curso en Udemy para mejorar en tecnologías como HTML, Scss, JQuery, Ajax y aprender un poco de Php y Prepros.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/udemy-blackparadox",
  },

  {
    title: "Morse Decoder",
    image: "Morse-Decoder",
    description: {
      technologies: [REACT, TAILWILDCSS, JAVASCRIPT, VERCEL, GIT, GITHUB, YARN],
      txt: "Morse decoder es una aplicación web que permite decodificar mensajes en código morse.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/morce",
    deploy: "https://morce.vercel.app/",
  },

  {
    title: "Cinema",
    image: "Cinema",
    description: {
      technologies: [
        PHP,
        LARAVEL,
        BOOTSTRAP,
        JAVASCRIPT,
        COMPOSER,
        MYSQL,
        GIT,
        GITHUB,
      ],
      txt: "Proyecto para aprender a utilizar Php y Laravel. En el se puede ver una lista de peliculas, ver los detalles de cada una, agregar peliculas, editarlas y eliminarlas. Tambien se pueden agregar, editar y eliminar tanto generos como usuarios.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/curso_laravel",
  },

  {
    title: "Dungeon Game",
    image: "dungeon_game",
    description: {
      technologies: [JAVASCRIPT, HTML, CSS, GITHUBPAGES, GIT, GITHUB],
      txt: "Es un juego hecho solamente en Html , Css y JavaScript . Se puede mover con las flechas del teclado o con los botones de la cruz, consta de 3 niveles donde tenes que buscar la llave y escapar del nivel sin que te alcancen los monstruos. Para jugar hay que prender la gameboy.",
    },
    deploy: "https://arenasagustin.GitHub.io/Juegos-HTML/",
    GitHub: "https://GitHub.com/ArenasAgustin/Juegos-HTML",
  },

  {
    title: "Pikemons",
    image: "Pikemons",
    description: {
      technologies: [
        JAVASCRIPT,
        CSS,
        REACT,
        REDUX,
        NODE,
        POSTGRESQL,
        EXPRESS,
        SEQUELIZE,
        GIT,
        GITHUB,
        NPM,
      ],
      txt: "Esta es mi primera aplicacion Full Stack, esta realizada consumiento datos de la API 'pokeapi' para buscar los pokemons existentes, en ella encontras con 40 pokemons precargados pero podes buscar mas, crear pokemons propios, ver las caracteristicas de cada pokemon y contas con distintos tipos de filtrado.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/Pikemons",
  },

  {
    title: "Box | Custodia y gestión digital - Test",
    image: "JornalYa",
    description: {
      technologies: [CSS, JAVASCRIPT, REACT, REDUX, VERCEL, GIT, GITHUB, YARN],
      txt: "Este proyecto es un test de aplicación de Box | Custodia y gestión digital, la app consta de un front que se comunica con una api para buscar documentos y mostrar los pdf.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/boxcustodia-test",
    deploy: "https://boxcustodia-test.vercel.app/",
  },

  {
    title: "Extriman Dapp - Test",
    image: "Extrimian-Dapp",
    description: {
      technologies: [
        TYPESCRIPT,
        SCSS,
        REACT,
        NODE,
        EHTERS,
        SOLIDITY,
        TRUFFLE,
        GANACHE,
        GIT,
        GITHUB,
        YARN,
      ],
      txt: "Este proyecto es una Dapp, para un test de aplicación de Extrimian, que se comunica con un smart contract desplegado en una red testnet blockchain ethereum. El proyecto se conecta con la cuenta de Metamask de la persona que usa la app para poder mostrar las primeras 10 transacciones realizadas con la cuenta, las transacciones las obtiene de la API Rinkeby. La app guarda en la blockchain la cuenta y la cambia al conectar una cuenta nueva.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/extrimian-dapp",
  },

  {
    title: "BeGo - Test",
    image: "BeGo-test",
    description: {
      technologies: [SCSS, JAVASCRIPT, REACT, GITHUBPAGES, GIT, GITHUB, YARN],
      txt: "Este proyecto es un test de aplicación de Be Go, La app consta de un front diseñado con Scss, JavaScript y React.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/bego-test",
    deploy: "https://arenasagustin.GitHub.io/bego-test/",
  },

  {
    title: "Curriculum vitae",
    image: "Cv",
    description: {
      technologies: [
        JAVASCRIPT,
        CSS,
        REACT,
        NODE,
        GITHUBPAGES,
        GIT,
        GITHUB,
        NPM,
      ],
      txt: "Proyecto para poder mostrar mi Cv de manera mas practica y poder compartirlo.",
    },
    deploy: "https://arenasagustin.GitHub.io/Cv2.0/",
    GitHub: "https://GitHub.com/ArenasAgustin/Cv2.0",
  },

  {
    title: "Gastly",
    image: "Gastly",
    description: {
      technologies: [HTML, CSS, GITHUBPAGES, GIT, GITHUB, YARN],
      txt: "Proyecto para poder mejorar en el uso de Css y HTML.",
    },
    deploy: "https://arenasagustin.GitHub.io/gastly-page/",
    GitHub: "https://GitHub.com/ArenasAgustin/gastly-page",
  },

  {
    title: "Haunter",
    image: "Haunter-page",
    description: {
      technologies: [HTML, CSS, GITHUBPAGES, GIT, GITHUB, YARN],
      txt: "Proyecto para poder mejorar en el uso de Css y HTML.",
    },
    deploy: "https://arenasagustin.GitHub.io/haunter-page/",
    GitHub: "https://GitHub.com/ArenasAgustin/haunter-page",
  },

  {
    title: "Cubo de Rubik",
    image: "cubo_de_rubik",
    description: {
      technologies: [HTML, CSS, GITHUBPAGES, GIT, GITHUB, YARN],
      txt: "Proyecto para poder mejorar en el uso de Css y HTML.",
    },
    deploy: "https://arenasagustin.GitHub.io/cubo-rubik/",
    GitHub: "https://GitHub.com/ArenasAgustin/cubo-rubik",
  },

  {
    title: "Christmas Tree 2.0",
    image: "Merry_Christmas_2.0",
    description: {
      technologies: [
        HTML,
        SCSS,
        JAVASCRIPT,
        REACT,
        GITHUBPAGES,
        GIT,
        GITHUB,
        YARN,
      ],
      txt: "Proyecto festejar que se aserca la época navideña.",
    },
    deploy: "https://arenasagustin.GitHub.io/merry-christmas2.0/",
    GitHub: "https://GitHub.com/ArenasAgustin/merry-christmas2.0",
  },

  {
    title: "Christmas Tree",
    image: "Merry_Christmas",
    description: {
      technologies: [
        HTML,
        SCSS,
        JAVASCRIPT,
        REACT,
        GITHUBPAGES,
        GIT,
        GITHUB,
        YARN,
      ],
      txt: "Proyecto festejar que se aserca la noche de navidad.",
    },
    deploy: "https://arenasagustin.GitHub.io/merry-christmas/",
    GitHub: "https://GitHub.com/ArenasAgustin/merry-christmas",
  },

  {
    title: "My avatar en pixelart",
    image: "My-avatar",
    description: {
      technologies: [
        HTML,
        SCSS,
        JAVASCRIPT,
        REACT,
        GITHUBPAGES,
        GIT,
        GITHUB,
        YARN,
      ],
      txt: "Proyecto para poder mejorar en el uso de Css, HTML y React.",
    },
    deploy: "https://arenasagustin.GitHub.io/pixelart-logo/",
    GitHub: "https://GitHub.com/ArenasAgustin/pixelart-logo",
  },

  {
    title: "Celular con Css",
    image: "celular-css",
    description: {
      technologies: [HTML, CSS, GITHUBPAGES, GIT, GITHUB],
      txt: "Proyecto para poder mejorar en el uso de Css y HTML.",
    },
    deploy: "https://arenasagustin.GitHub.io/celular-css/",
    GitHub: "https://GitHub.com/ArenasAgustin/celular-css",
  },

  {
    title: "Pokeball",
    image: "pokeball",
    description: {
      technologies: [HTML, CSS, GITHUBPAGES, GIT, GITHUB],
      txt: "Proyecto para poder mejorar en el uso de Css y HTML.",
    },
    deploy: "https://arenasagustin.GitHub.io/pokeball-css/",
    GitHub: "https://GitHub.com/ArenasAgustin/pokeball-css",
  },

  {
    title: "Valienta Frontend - Test",
    image: "R_M-Test",
    description: {
      technologies: [
        SCSS,
        JAVASCRIPT,
        REACT,
        REDUX,
        MONGODB,
        EXPRESS,
        GIT,
        GITHUB,
        YARN,
      ],
      txt: "Este proyecto es un test de aplicación de Valienta, la app consta de un front que se comunica con una api para buscar y guardar en MongoDB personajes de Rick y Morty, Episodios y Lugares.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/valienta-front-test",
  },

  {
    title: "To do App (TypeScript)",
    image: "ToDoApp2",
    description: {
      technologies: [
        TYPESCRIPT,
        REACT,
        REDUX,
        NODE,
        CSS,
        GITHUBPAGES,
        GIT,
        GITHUB,
        NPM,
      ],
      txt: "Este proyecto lo utilice para poder aprender a utilizar el lenguaje TypeScript.",
    },
    deploy: "https://arenasagustin.GitHub.io/TodoAppTypeScript/",
    GitHub: "https://GitHub.com/ArenasAgustin/TodoAppTypeScript0",
  },

  {
    title: "To do App (JavaScript)",
    image: "ToDoApp2",
    description: {
      technologies: [
        JAVASCRIPT,
        REACT,
        REDUX,
        NODE,
        CSS,
        GITHUBPAGES,
        GIT,
        GITHUB,
        NPM,
      ],
      txt: "Con este proyecto evaluaron cuanto aprendi sobre el funcionamiento de react + redux.",
    },
    deploy: "https://arenasagustin.GitHub.io/ToDoApp2.0/",
    GitHub: "https://GitHub.com/ArenasAgustin/ToDoApp2.0",
  },

  {
    title: "AgusWeather",
    image: "AgusWeather",
    description: {
      technologies: [JAVASCRIPT, NODE, CSS, GITHUBPAGES, GIT, GITHUB, NPM],
      txt: "Con esta app aprendi la utilizacion e implementación de una Api en un proyecto.",
    },
    deploy: "https://arenasagustin.GitHub.io/AgusWeather/",
    GitHub: "https://GitHub.com/ArenasAgustin/AgusWeather",
  },

  {
    title: "To do App",
    image: "ToDoApp",
    description: {
      technologies: [JAVASCRIPT, NODE, CSS, GIT, GITHUB, NPM],
      txt: "Primera aproximación de una ToDo App.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/ToDoApp",
  },

  {
    title: "Friends page",
    image: "FriendsPage",
    description: {
      technologies: [JAVASCRIPT, NODE, CSS, GIT, GITHUB, NPM],
      txt: "En este proyecto me meti en el mundo de AJAX para poder entender y aprender de la tecnologia para poder avanzar con otras tecnologias más inovadoras. Sumado a practicar estilos con Css.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/FriendsPage",
  },

  {
    title: "Responsive Web",
    image: "ResponsiveWeb",
    description: {
      technologies: [JAVASCRIPT, NODE, LESS, GIT, GITHUB, NPM],
      txt: "Proyecto para poder aprender y enteder Less, en este proyecto se agarro una pagina y se le dio estilos con less para intentar dejarla como en las imagenes de la carpeta diseño.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/ResponsiveWeb",
  },

  {
    title: "GrootBash",
    image: "GrootBash",
    description: {
      technologies: [JAVASCRIPT, NODE, GIT, GITHUB, NPM],
      txt: "Este proyecto de escribir mi propia shell utilizada para implementar funcionalidades y herramientas que voy aprendiendo. Inspirado en Bash.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/GrootBash",
  },

  {
    title: "MyPromises",
    image: "Promesas",
    description: {
      technologies: [JAVASCRIPT, NODE, GIT, GITHUB, NPM],
      txt: "En este proyecto desarrolle mis propias promesas para entender por completo el funcionamiento de las Promesas.",
    },
    GitHub: "https://GitHub.com/ArenasAgustin/MyPromises",
  },
];
