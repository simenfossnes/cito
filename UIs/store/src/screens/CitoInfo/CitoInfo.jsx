import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CitoInfo.styles.css';
import CitoTemplate from '../../compoments/_/templates/CitoTemplate/CitoTemplate';
import dummyApps from '../../data/dummyApps';

class CitoInfo extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('CitoInfo mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('CitoInfo getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('CitoInfo getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('CitoInfo did update');
  }

  componentWillUnmount = () => {
    console.log('CitoInfo will unmount');
  }

  render () {

    const dummyAppIdList = dummyApps.map(a => a.id);
    const citoId = parseInt(this.props.match.params.citoId);
    const cito = dummyApps.filter(a => a.id === citoId)[0];
    
    console.log('this.props.match.params: ', this.props.match.params.citoId);
    console.log('dummyAppIdList: ', dummyAppIdList);

    // check for id
    if (!dummyAppIdList.includes(citoId)) {
      return <p>App does not exist.</p>;
    }

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CitoInfoWrapper">
        <CitoTemplate
          appName={cito.name}
        />
      </div>
    );
  }
}

CitoInfo.propTypes = {
  // bla: PropTypes.string,
};

CitoInfo.defaultProps = {
  // bla: 'test',
};

export default withRouter(CitoInfo);
