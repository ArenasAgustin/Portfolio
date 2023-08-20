import {
  ANACONDA,
  ANGULAR,
  BOOTSTRAP,
  COMPOSER,
  CPP,
  CSS,
  EHTERS,
  EXPRESS,
  FIGMA,
  FIREBASE,
  GANACHE,
  GIT,
  GITHUB,
  GITHUBPAGES,
  GITLAB,
  HEROKU,
  HTML,
  JAVA,
  JAVASCRIPT,
  JQUERY,
  JSONCONST,
  JUPYTER,
  LARAGON,
  LARAVEL,
  LESS,
  MONGODB,
  MONGOOSE,
  MYSQL,
  NEXT,
  NGINX,
  NODE,
  NPM,
  PHP,
  PHPMYADMIN,
  POSTGRESQL,
  PREPROS,
  PYTHON,
  REACT,
  REDUX,
  SCSS,
  SEQUELIZE,
  SOLIDITY,
  TAILWILDCSS,
  TRUFFLE,
  TYPESCRIPT,
  VERCEL,
  WEB3,
  YARN,
} from "./technologies";

const ADVANCED = "skills__level-item-circle--advanced";
const INTERMEDIATE = "skills__level-item-circle--intermediate";
const BEGINNER = "skills__level-item-circle--beginner";

export const skills = {
  frontEnd: [
    {
      technology: HTML,
      image: "html5-plain.svg",
      expLevel: ADVANCED,
    },

    {
      technology: CSS,
      image: "css3-plain.svg",
      expLevel: ADVANCED,
    },

    {
      technology: SCSS,
      image: "sass-original.svg",
      expLevel: ADVANCED,
    },

    {
      technology: LESS,
      image: "less-plain-wordmark.svg",
      expLevel: INTERMEDIATE,
    },

    {
      technology: BOOTSTRAP,
      image: "bootstrap-plain.svg",
      expLevel: INTERMEDIATE,
    },

    {
      technology: TAILWILDCSS,
      image: "tailwindcss-plain.svg",
      expLevel: BEGINNER,
    },

    {
      technology: JAVASCRIPT,
      image: "javascript-plain.svg",
      expLevel: ADVANCED,
    },

    {
      technology: TYPESCRIPT,
      image: "typescript-plain.svg",
      expLevel: ADVANCED,
    },

    {
      technology: PYTHON,
      image: "python-original.svg",
      expLevel: BEGINNER,
    },

    {
      technology: PHP,
      image: "php-plain.svg",
      expLevel: BEGINNER,
    },

    {
      technology: REACT,
      image: "react-original.svg",
      expLevel: ADVANCED,
    },

    {
      technology: ANGULAR,
      image: "angularjs-plain.svg",
      expLevel: BEGINNER,
    },

    {
      technology: REDUX,
      image: "redux-original.svg",
      expLevel: ADVANCED,
    },

    {
      technology: NEXT,
      image: "nextjs-original.svg",
      expLevel: BEGINNER,
    },

    {
      technology: JQUERY,
      image: "jquery-original.svg",
      expLevel: INTERMEDIATE,
    },

    {
      technology: LARAVEL,
      image: "laravel-plain.svg",
      expLevel: BEGINNER,
    },
  ],

  backEnd: [
    {
      technology: PYTHON,
      image: "python-original.svg",
      expLevel: BEGINNER,
    },

    {
      technology: PHP,
      image: "php-plain.svg",
      expLevel: BEGINNER,
    },

    {
      technology: LARAVEL,
      image: "laravel-plain.svg",
      expLevel: BEGINNER,
    },

    {
      technology: NODE,
      image: "nodejs-original.svg",
      expLevel: ADVANCED,
    },

    {
      technology: EXPRESS,
      image: "express-original.svg",
      expLevel: ADVANCED,
    },

    {
      technology: SEQUELIZE,
      image: "sequelize-original.svg",
      expLevel: ADVANCED,
    },

    /* {
      technology: "Docker",
      image: "docker-plain.svg",
      expLevel: BEGINNER,
    }, */

    /* {
      technology: "Socket.io",
      image: "socketio-original.svg",
      expLevel: BEGINNER,
    }, */

    {
      technology: MONGOOSE,
      image: "mongoose5_62x30_transparent.png",
      expLevel: ADVANCED,
    },

    {
      technology: PHPMYADMIN,
      image: "phpmyadmin-icon.svg",
      expLevel: BEGINNER,
    },

    {
      technology: NGINX,
      image: "nginx-original.svg",
      expLevel: BEGINNER,
    },

    {
      technology: POSTGRESQL,
      image: "postgresql-plain.svg",
      expLevel: INTERMEDIATE,
    },

    {
      technology: MYSQL,
      image: "mysql-original.svg",
      expLevel: BEGINNER,
    },

    {
      technology: MONGODB,
      image: "mongodb-original.svg",
      expLevel: ADVANCED,
    },

    /* {
      technology: "Redis",
      image: "redis-original.svg",
      expLevel: BEGINNER,
    }, */
  ],

  tools: [
    {
      technology: GIT,
      image: "git-original.svg",
      expLevel: ADVANCED,
    },

    {
      technology: GITHUB,
      image: "github-original.svg",
      expLevel: INTERMEDIATE,
    },

    {
      technology: GITLAB,
      image: "gitlab-original.svg",
      expLevel: BEGINNER,
    },

    {
      technology: JSONCONST,
      image: "json.svg",
      expLevel: ADVANCED,
    },

    {
      technology: NPM,
      image: "npm-original-wordmark.svg",
      expLevel: ADVANCED,
    },

    {
      technology: YARN,
      image: "yarn-original.svg",
      expLevel: ADVANCED,
    },

    {
      technology: COMPOSER,
      image: "composer-line.svg",
      expLevel: BEGINNER,
    },

    {
      technology: FIREBASE,
      image: "firebase-plain.svg",
      expLevel: INTERMEDIATE,
    },

    {
      technology: HEROKU,
      image: "heroku-original.svg",
      expLevel: INTERMEDIATE,
    },

    {
      technology: GITHUBPAGES,
      image: "github-original.svg",
      expLevel: INTERMEDIATE,
    },

    {
      technology: VERCEL,
      image: "Vercel_logo_black.png",
      expLevel: INTERMEDIATE,
    },

    {
      technology: PREPROS,
      image: "prepros.png",
      expLevel: BEGINNER,
    },

    {
      technology: LARAGON,
      image: "laragon.svg",
      expLevel: BEGINNER,
    },

    {
      technology: FIGMA,
      image: "figma-original.svg",
      expLevel: INTERMEDIATE,
    },

    {
      technology: SOLIDITY,
      image: "solidity-original.svg",
      expLevel: BEGINNER,
    },

    {
      technology: WEB3,
      image: "web3js-logo-62DEE79B50-seeklogo.com.png",
      expLevel: BEGINNER,
    },

    {
      technology: EHTERS,
      image: "ethers-logo-D5B86204D8-seeklogo.com.png",
      expLevel: BEGINNER,
    },

    {
      technology: TRUFFLE,
      image: "logo.png",
      expLevel: BEGINNER,
    },

    {
      technology: GANACHE,
      image: "ganache-logo.png",
      expLevel: BEGINNER,
    },

    {
      technology: ANACONDA,
      image: "anaconda-original.svg",
      expLevel: BEGINNER,
    },

    {
      technology: JUPYTER,
      image: "jupyter-original.svg",
      expLevel: BEGINNER,
    },

    {
      technology: JAVA,
      image: "java-original.svg",
      expLevel: BEGINNER,
    },

    {
      technology: CPP,
      image: "cplusplus-plain.svg",
      expLevel: BEGINNER,
    },
  ],
};
