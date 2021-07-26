import { render } from '@testing-library/react';

import BottomContainer from './bottom-container';

describe('BottomContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BottomContainer />);
    expect(baseElement).toBeTruthy();
  });
});
