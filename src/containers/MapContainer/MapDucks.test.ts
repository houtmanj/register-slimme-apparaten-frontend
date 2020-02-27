import { testActionCreator } from '../../test/utils';
import {
  ADD_LAYER_DATA,
  REMOVE_LAYER_DATA,
  SELECT_LAYER_ITEM,
  TOGGLE_MAP_LAYER,
  addLayerDataActionCreator,
  removeLayerDataActionCreator,
  selectLayerItemActionCreator,
  toggleMapLayerActionCreator,
} from './MapDucks';

describe('MapDucks', () => {
  it('should dispatch addLayerDataActionCreator', () => {
    const payload = [{}];
    testActionCreator(addLayerDataActionCreator, ADD_LAYER_DATA, payload);
  });

  it('should dispatch removeLayerDataActionCreator', () => {
    const payload = ['layer'];
    testActionCreator(removeLayerDataActionCreator, REMOVE_LAYER_DATA, payload);
  });

  it('should dispatch selectLayerItemActionCreator', () => {
    const payload = { name: 'test', item: {}};
    testActionCreator(selectLayerItemActionCreator, SELECT_LAYER_ITEM, payload);
  });

  it('should dispatch toggleMapLayerActionCreator', () => {
    const payload = ['layer'];
    testActionCreator(toggleMapLayerActionCreator, TOGGLE_MAP_LAYER, payload);
  });
});
