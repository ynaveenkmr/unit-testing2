import React from 'react';
import Counter from './Counter'
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';

describe("Counter Testcases",() => {
    afterEach(cleanup)

    it('renders learn react link', () => {
      const getCounter  = render(<Counter />);
      expect(getCounter).toMatchSnapshot()
    });

    it('increments counter', () => {
        const { getByTestId } = render(<Counter />); 
        fireEvent.click(getByTestId('button-up'))
        expect(getByTestId('counter')).toHaveTextContent('1')
      });

    
      it('decrements counter', () => {
        const { getByTestId } = render(<Counter />); 
        fireEvent.click(getByTestId('button-down'))
        expect(getByTestId('counter')).toHaveTextContent('-1')
      }); 

      /*For setTimeout()*/
      it('increments counter after 0.5s', async () => {
        const { getByTestId, getByText } = render(<Counter />); 
        fireEvent.click(getByTestId('button-up-delay'))
        const varCounter = await waitForElement(() => getByText('1')) 
        expect(varCounter).toHaveTextContent('1')
      });
  }) 