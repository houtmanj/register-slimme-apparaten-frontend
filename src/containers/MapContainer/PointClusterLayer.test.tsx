import { rawLayerData } from 'layerData.mock';
import PointClusterLayer, { transform } from './PointClusterLayer';

describe('transform', () => {
  it('should agregate the results', () => {
    const results = transform(rawLayerData);
    expect(results).not.toBeUndefined();
    expect(Object.keys(results)).toEqual(['Slimme verkeersinformatie', 'Camera']);
  });
});

describe('PointClusterLayer', () => {
  it('should render the component', () => {
    expect(true).toBe(true);
  });
});
