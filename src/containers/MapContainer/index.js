import React from "react"
import Map from 'components/Map';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import reducer, { makeSelectDevices, setDevicesActionCreator, selectDeviceActionCreator } from './ducks';

const MapContainer = ({...props}) => <Map {...props} />

MapContainer.propTypes = {
  devices: PropTypes.array,
  setDevices: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  devices: makeSelectDevices(),
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setDevices: setDevicesActionCreator,
      selectDevice: selectDeviceActionCreator,
    },
    dispatch
  );
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'map', reducer });
export default compose(withReducer, withConnect)(MapContainer);