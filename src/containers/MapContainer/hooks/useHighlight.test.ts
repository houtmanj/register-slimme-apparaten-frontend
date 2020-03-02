import { renderHook } from '@testing-library/react-hooks';

import useHighlight from './useHighlight';

describe('useHighlight', () => {
  it('should initialize and highlight elements', () => {
    const { result } = renderHook(() => useHighlight());
    expect(result.current).not.toBeUndefined();

    const divMarker = document.createElement('div');
    const spanMarker = document.createElement('div')

    expect(divMarker.classList.length).toBe(0)
    expect(divMarker.classList.length).toBe(0)
    result.current.highlight(divMarker);
    expect(divMarker.classList.length).toBe(1)

    result.current.highlight(spanMarker);
    expect(divMarker.classList.length).toBe(0);
    expect(spanMarker.classList.length).toBe(1);
  });
});
