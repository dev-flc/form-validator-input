import { Route, Routes } from 'react-router-dom';
import Container from './../containers/containerGeneral.jsx';
import Home from './../module/home/home.jsx';
import Example from './../module/example/example.jsx';
import Error404 from 'Components/error404.jsx';

import PropTypes from 'prop-types';
import React from 'react';

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Container>
            <Home />
          </Container>
        }
      />
      <Route
        index
        path="example"
        element={
          <Container>
            <Example />
          </Container>
        }
      />
      <Route
        index
        path="*"
        element={
          <Container>
            <Error404 />
          </Container>
        }
      />
    </Routes>
  );
};

Routers.propTypes = {
  navigation: PropTypes.object,
};
Routers.displayName = 'Router';

export default Routers;
