import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Title from 'Components/title.jsx';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Link } from 'react-router-dom';

import {
  actionSetLevel1,
  actionSetLevel2,
  actionSetLevel3,
} from '../../store/actions/actionsLevel1';
import { bindActionCreators } from 'redux';

class Example extends Component {
  onClikButton = nameButton => {
    const { actionSetLevel1, actionSetLevel2, actionSetLevel3 } = this.props;
    if (nameButton === 'lavel1') {
      actionSetLevel1('propertyLevel1', 'Set property level 1 ✅');
    } else if (nameButton === 'lavel2') {
      actionSetLevel2('propertyLevel2', 'Set property level 2 ✅');
    } else if (nameButton === 'lavel3') {
      actionSetLevel3('propertyLevel3', 'Set property level 3 ✅');
    } else {
      console.log('Action undefined');
    }
  };

  render() {
    const { level1 } = this.props;
    return (
      <div className="container">
        <div className="container-bac">
          <Title titulo="Example Redux" />
        </div>
        <div className="container-bac">
          <TreeView
            className="tree-view-text"
            expanded={['1', '3', '5']}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="1" label="lavel1">
              <TreeItem nodeId="2" label={level1.propertyLevel1} />
              <TreeItem nodeId="3" label="lavel2">
                <TreeItem nodeId="4" label={level1.level2.propertyLevel2} />
                <TreeItem nodeId="5" label="lavel3">
                  <TreeItem
                    nodeId="6"
                    label={level1.level2.level3.propertyLevel3}
                  />
                </TreeItem>
              </TreeItem>
            </TreeItem>
          </TreeView>
        </div>
        <div className="container-bac">
          <button onClick={() => this.onClikButton('lavel1')}>
            {'Set Level 1'}
          </button>
          <button onClick={() => this.onClikButton('lavel2')}>
            {'Set Level 2'}
          </button>
          <button onClick={() => this.onClikButton('lavel3')}>
            {'Set Level 3'}
          </button>
          <button onClick={() => this.onClikButton('reset')}>{'Reset'}</button>
        </div>
        <Link className="text-lint" to="/">
          Home
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  level1: state.level1,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      actionSetLevel1,
      actionSetLevel2,
      actionSetLevel3,
    },
    dispatch
  );

Example.propTypes = {
  actionSetLevel1: PropTypes.func,
  actionSetLevel2: PropTypes.func,
  actionSetLevel3: PropTypes.func,
  level1: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
