import React from 'react';
import { render } from '@testing-library/react';
import { withAppContext } from 'test/utils';
import DeviceDetails from '.';

describe('DeviceDetails', () => {
  let onDeviceDetailsCloseMock;
  let props: any;

  beforeEach(() => {
    onDeviceDetailsCloseMock = jest.fn();
    props = {
      device: {
        id: 13,
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [4.8795, 52.3743],
        },
        category: 'Sensor',
        soort: 'Luchtkwaliteit',
        privacy: '',
        contact: 'iothings',
        longitude: 4.8795,
        latitude: 52.3743,
        organisation: 'GGD Amsterdam',
      },
      onDeviceDetailsClose: onDeviceDetailsCloseMock,
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render without errors', () => {
    const { device } = props;
    const { queryByText } = render(withAppContext(<DeviceDetails {...props} />));
    expect(queryByText(device.category)).toBeInTheDocument();
    expect(queryByText(device.soort)).toBeInTheDocument();
    expect(queryByText(device.organisation)).toBeInTheDocument();
    expect(queryByText('Privacyverklaring')).not.toBeInTheDocument();
  });
});
