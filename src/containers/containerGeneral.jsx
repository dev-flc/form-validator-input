import PropTypes from 'prop-types';
import React from 'react';

const ContainerGeneral = React.memo(props => <div> {props.children} </div>);

ContainerGeneral.propTypes = {
  children: PropTypes.node.isRequired,
};

ContainerGeneral.displayName = 'ContainerGeneral';

export default ContainerGeneral;
