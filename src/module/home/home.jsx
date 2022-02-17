import React from 'react';
import Title from 'Components/title.jsx';
import imageEslint from 'Images/eslint.svg';
import imagePrettier from 'Images/prettier.svg';
import imageReact from 'Images/react.svg';
import imageRedux from 'Images/redux.svg';
import imageSass from 'Images/sass.svg';
import imageWebpack from 'Images/webpack.svg';
import { Link } from 'react-router-dom';

const Home = React.memo(() => (
  <div className="container">
    <div className="container-bac">
      <Title titulo="Template Webpack 5" />
    </div>
    <div className="container-bac">
      <img src={imageReact} className="image image-animation" alt="React" />
      <img src={imageRedux} className="image image-animation" alt="Redux" />
      <img src={imageSass} className="image" alt="Sass" />
      <img src={imagePrettier} className="image" alt="Prettier" />
      <img src={imageEslint} className="image image-animation" alt="Eslint" />
      <img src={imageWebpack} className="image image-animation" alt="Webpack" />
    </div>
    <Link className="text-lint" to="/example">
      Example Redux
    </Link>
  </div>
));
Home.displayName = 'Home';

export default Home;
