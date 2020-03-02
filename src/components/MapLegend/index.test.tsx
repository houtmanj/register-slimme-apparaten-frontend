import React from 'react';
import { render } from '@testing-library/react';
import { legend } from 'shared/configuration/categories';
import MapLegend from '.';

describe('MapLegend', () => {
  let onToggleCategoryMock: jest.Mock;
  let props: any;

  beforeEach(() => {
    onToggleCategoryMock = jest.fn();
    props = {
      onToggleCategory: onToggleCategoryMock,
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render without errors', () => {
    const { queryByText } = render(<MapLegend {...props} />);
    Object.entries(legend).forEach(([, layer]) => expect(queryByText(layer.name)).toBeInTheDocument());
  });
});
