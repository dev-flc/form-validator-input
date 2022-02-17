import PropTypes from 'prop-types';
import React from 'react';

const Title = React.memo(({ titulo }) => (
  <h1 className="gradient-tex"> {titulo} </h1>
));

Title.propTypes = {
  aaaa: PropTypes.string,
  titulo: PropTypes.string,
};

Title.displayName = 'Title';

export default Title;
