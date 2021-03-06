import L from 'leaflet';

import { categories } from 'shared/configuration/categories';

const markerOptions = {
  iconSize: [23, 23],
  iconAnchor: [8, 15],
  popupAnchor: [-3, -76],
};

export const getMarkerIcon = categoryName => {
  const name = categoryName === 'Beacons' ? 'Baken' : categoryName;
  const iconUrl = categories[name].iconUrl;
  return L.icon({
    ...markerOptions,
    iconUrl,
  });
};

