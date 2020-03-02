import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import SearchResultsList, {
  SearchResultsListItem,
  SearchResultsListItemProps,
  SearchResultsListProps,
} from './SearchResultsList';

describe('SearchResultsListItem', () => {
  let onSelectMock: jest.Mock;
  let props: SearchResultsListItemProps;

  beforeEach(() => {
    onSelectMock = jest.fn();
    props = {
      id: 'id',
      name: 'list-item-name',
      selected: false,
      index: 1,
      onSelect: onSelectMock,
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render without errors', () => {
    const { queryByText } = render(<SearchResultsListItem {...props} />);
    expect(queryByText(props.name)).toBeInTheDocument();
  });

  it('should select the item on click', () => {
    const { getByText } = render(<SearchResultsListItem {...props} />);

    expect(onSelectMock).toHaveBeenCalledTimes(0);

    act(() => {
      fireEvent.click(getByText(props.name));
    });

    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});

describe('SearchResultsList', () => {
  let onSelectMock: jest.Mock;
  let props: SearchResultsListProps;

  beforeEach(() => {
    onSelectMock = jest.fn();
    props = {
      items: [
        { id: '1', name: 'first-item' },
        { id: '2', name: 'second-item' },
      ],
      selected: false,
      onSelect: onSelectMock,
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render without errors', () => {
    const { queryByText } = render(<SearchResultsList {...props} />);
    expect(queryByText(props.items[0].name)).toBeInTheDocument();
    expect(queryByText(props.items[1].name)).toBeInTheDocument();
  });

  it('should select the item on click', () => {
    const { getByText } = render(<SearchResultsList {...props} />);

    expect(onSelectMock).toHaveBeenCalledTimes(0);

    act(() => {
      fireEvent.click(getByText(props.items[1].name));
    });

    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith(1);
  });
});
