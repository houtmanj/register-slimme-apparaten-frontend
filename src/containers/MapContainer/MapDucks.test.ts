import { testActionCreator } from '../../test/utils';
import mapReducer, {
  ADD_LAYER_DATA,
  REMOVE_LAYER_DATA,
  SELECT_LAYER_ITEM,
  TOGGLE_LAYER,
  addLayerDataActionCreator,
  removeLayerDataActionCreator,
  selectLayerItemActionCreator,
  toggleLayerActionCreator,
  initialState,
} from './MapDucks';
import { legend } from '../../shared/configuration/categories';

describe('MapDucks', () => {
  describe('Map actions', () => {
    it('should dispatch addLayerDataActionCreator', () => {
      const payload = [{}];
      testActionCreator(addLayerDataActionCreator, ADD_LAYER_DATA, payload);
    });

    it('should dispatch removeLayerDataActionCreator', () => {
      const payload = ['layer'];
      testActionCreator(removeLayerDataActionCreator, REMOVE_LAYER_DATA, payload);
    });

    it('should dispatch selectLayerItemActionCreator', () => {
      const payload = { name: 'test', item: {} };
      testActionCreator(selectLayerItemActionCreator, SELECT_LAYER_ITEM, payload);
    });

    it('should dispatch toggleLayerActionCreator', () => {
      const payload = ['layer'];
      testActionCreator(toggleLayerActionCreator, TOGGLE_LAYER, payload);
    });
  });

  describe('legend', () => {
    it('should create the legend object', () => {
      expect(Object.keys(legend).length).toBeGreaterThan(0);
    });
  });

  describe('Map reducer', () => {
    it('should ignore an unknown action', () => {
      expect(mapReducer(undefined, { type: 'unknown-type', payload: null })).toEqual({
        ...initialState,
      });
    });

    it('should handle the ADD_LAYER_DATA', () => {
      const layerData = { features: [1, 2, 3] };
      expect(mapReducer(undefined, addLayerDataActionCreator([layerData]))).toEqual({
        ...initialState,
        layers: [layerData],
      });
    });

    it('should handle the REMOVE_LAYER_DATA', () => {
      const layerData = { name: 'layer-name', features: [1, 2, 3] };
      const state = { ...initialState, layers: [layerData] };
      expect(mapReducer(state, removeLayerDataActionCreator(['layer-name']))).toEqual({
        ...initialState,
        layers: [],
      });
    });

    it('should handle the SELECT_LAYER_ITEM', () => {
      const payload = { name: 'item-name', item: { prop: 1 } };
      expect(mapReducer(undefined, selectLayerItemActionCreator(payload))).toEqual({
        ...initialState,
        selectedItem: payload.item,
        selectedLayer: payload.name,
      });
    });

    it('should handle the TOGGLE_LAYER', () => {
      const payload = 'Baken';
      expect(mapReducer(undefined, toggleLayerActionCreator(payload))).toEqual({
        ...initialState,
        legend: {
          ...initialState.legend,
          Baken: false,
        },
      });
    });
  });
});
