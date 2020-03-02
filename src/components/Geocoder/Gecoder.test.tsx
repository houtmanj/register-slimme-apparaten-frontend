import React from 'react';
import { render } from '@testing-library/react';
import { withAppContext } from 'test/utils'
import Geocoder, { GeocoderProps } from './Geocoder';
import { getSuggestionsResult } from '../../__mocks__/Geocoder.mock';

describe('Geocoder', () => {
  const searchBarId = 'search-bar';
  let props: GeocoderProps;
  const getAddressByIdMock = jest.fn();
  const getSuggestionsMock = jest.fn(() => { getSuggestionsResult});

  beforeEach(() => {
    props = {
      placeholder: 'geocoder-placeholder',
      getAddressById: getAddressByIdMock,
      getSuggestions: getSuggestionsMock,
    };
  });

  it('should render without errors', () => {
    const { getByTestId } = render(
      withAppContext(<Geocoder {...props}/>)
    );

    expect(getByTestId(searchBarId)).toBeInTheDocument();
    const searchInput = getByTestId(searchBarId).querySelector(
      'input:first-of-type'
    );

    expect(searchInput).not.toBeNull();
    // console.log(searchInput);
    // act(() =>
    //   fireEvent.change(searchInput, { target: { value: 'search' } })
    // );

    // expect(getSuggestionsMock).toHaveBeenCalledTimes(1);


  });


});
