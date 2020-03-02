import { wktPointToLocation } from './transformers';

describe('wktPointToLocation', () => {
  it('should convert the wkt point to location', () => {
    const wkt = 'POINT(4.89295931 52.3596281)';
    expect(wktPointToLocation(wkt)).toEqual({
      lat: 52.3596281,
      lon: 4.89295931,
    });
  });

  it('should throw an error when the wkt is not a valid point', () => {
    const wkt = 'POLYGON(4.89295931 52.3596281)';
    expect(() => wktPointToLocation(wkt)).toThrow();

  });
});
