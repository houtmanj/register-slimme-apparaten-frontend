import { createLeafletComponent } from '@datapunt/react-maps';

/**
 * MarkerClusterGroup creator. Written this way to allow
*/
const MarkerClusterGroup = (props: any) => createLeafletComponent('markerClusterGroup')(props);

export default MarkerClusterGroup;
