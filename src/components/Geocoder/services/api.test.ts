import { getSuggestions, getAddressById } from './api';

const searchResult = {
  docs: [
    {
      weergavenaam: 'Westerstraat 189A-H, 1015MA Amsterdam',
      id: 'adr-2cfb3cfcbcad0e3d8316309bb286cdc0',
    },
    {
      weergavenaam: 'Westerstraat 111A-1, 1015LZ Amsterdam',
      id: 'adr-9cd5c397becc375374a25a28600ca907',
    },
    {
      weergavenaam: 'Westerstraat 111A-2, 1015LZ Amsterdam',
      id: 'adr-ae30be35f0e549f97317ff60d33e05e7',
    },
  ],
};

const addressResult = {
  docs: [
    {
      centroide_ll: 'POINT(4.8832648 52.37821877)',
    },
  ],
};

describe('Name of the group', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('getSuggestions', () => {
    it('should call the service and convert the data', async () => {
      fetch.mockResponse(JSON.stringify({ response: searchResult }));
      const result = await getSuggestions('serch-term');
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toHaveLength(3);
    });
  });

  describe('getAddressById', () => {
    it('should return the location of the addres ', async () => {
      fetch.mockResponse(JSON.stringify({ response: addressResult }));
      const result = await getAddressById('addres-id');
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual({ lat: 52.37821877, lon: 4.8832648 });
    });
  });
});
