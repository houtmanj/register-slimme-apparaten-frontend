import { testActionCreator } from '../../test/utils';

import {
  SEARCH_TERM_CHANGED,
  SEARCH_TERM_SELECTED,
  SEARCH_RESULTS_CHANGED,
  RESULT_SELECTED,
  CLEAR_SEARCH_RESULTS,
  searchTermChanged,
  searchTermSelected,
  searchResultsChanged,
  resultSelected,
  clearSearchResults,
  reducer,
  initialState,
} from './GeocoderDucks';

describe('Geocoder ducks', () => {
  describe('Geocoder actions', () => {
    it('should dispatch searchTermChanged', () => {
      const payload = 'search-term';
      testActionCreator(searchTermChanged, SEARCH_TERM_CHANGED, payload);
    });

    it('should dispatch searchTermSelected', () => {
      const payload = 'search-term';
      testActionCreator(searchTermSelected, SEARCH_TERM_SELECTED, payload);
    });

    it('should dispatch searchResultsChanged', () => {
      const payload = [{}];
      testActionCreator(searchResultsChanged, SEARCH_RESULTS_CHANGED, payload);
    });

    it('should dispatch resultSelected', () => {
      const payload = 1;
      testActionCreator(resultSelected, RESULT_SELECTED, payload);
    });

    it('should dispatch clearSearchResults', () => {
      const payload = null;
      testActionCreator(clearSearchResults, CLEAR_SEARCH_RESULTS, payload);
    });
  });
});


describe('Geocoder reducer', () => {
  it('should ignore an unknown action', () => {
    expect(reducer(undefined, { type: 'unknown-type', payload: null })).toEqual({
      ...initialState,
    });
  });

  it('should handle the SEARCH_TERM_CHANGED', () => {
    const searchTerm = 'search-term';
    expect(reducer(undefined, searchTermChanged(searchTerm))).toEqual({
      ...initialState,
      term: searchTerm,
    });
  });

  it('should handle the SEARCH_TERM_SELECTED', () => {
    const searchTerm = 'search-term';
    expect(reducer(undefined, searchTermSelected(searchTerm))).toEqual({
      ...initialState,
      term: searchTerm,
      searchMode: false,
    });
  });

  it('should handle the SEARCH_RESULTS_CHANGED', () => {
    const searchResults = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }];
    expect(reducer(undefined, searchResultsChanged(searchResults))).toEqual({
      ...initialState,
      results: searchResults,
    });
  });

  it('should handle the resultSelected', () => {
    const selectedIndex = 1;
    const searchResults = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }];
    const state = {
      ...initialState,
      results: searchResults,
    }
    expect(reducer(state, resultSelected(selectedIndex))).toEqual({
      ...state,
      index: selectedIndex,
      term: 'two',
    });
  });

  it('should handle the CLEAR_SEARCH_RESULTS', () => {
    const state = { ...initialState, results: [{id: 20}]};
    expect(reducer(state,clearSearchResults())).toEqual({
      ...initialState,
    });
  });


});
