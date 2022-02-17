import React from 'react';
import img404 from 'Images/img404.svg';
import Title from 'Components/title.jsx';

const Error404 = React.memo(() => (
  <div className="container-error-404">
    <Title titulo="4 0 4" />
    <img src={img404} />
    <p>Pagina no encontrada</p>
  </div>
));

Error404.displayName = 'Error404';

export default Error404;
