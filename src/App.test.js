import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe("App Testcases",() => {
  afterEach(cleanup)
it('renders learn react link', () => {
    const getByText  = render(<App />);
    expect(getByText).toMatchSnapshot()
  });
});

