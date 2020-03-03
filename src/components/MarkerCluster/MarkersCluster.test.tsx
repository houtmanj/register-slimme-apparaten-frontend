import React from 'react';
import * as reactMaps from '@datapunt/react-maps';
import { render } from '@testing-library/react';
import { layerData } from 'layerData.mock';

import MarkersCluster, { MarkersClusterProps } from './MarkersCluster';

const layerInstanceMock:any = {
  clearLayers: jest.fn(),
  addLayer: jest.fn(),
};

jest.spyOn(reactMaps, 'createLeafletComponent').mockReturnValue(({ setInstance }) => {
  setInstance && setInstance(layerInstanceMock);
  return null;
});

describe('MarkersCluster', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render without errors', () => {
    const props: MarkersClusterProps = {
      clusterOptions: {},
      pointOptions: jest.fn(() => ({})),
      data: layerData,
      onItemSelected: jest.fn(),
    };

    render(<MarkersCluster {...props} />);
    expect(layerInstanceMock.clearLayers).toHaveBeenCalledTimes(1);
    expect(layerInstanceMock.addLayer).toHaveBeenCalledTimes(2);
  });
});
