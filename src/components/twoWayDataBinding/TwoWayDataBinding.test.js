import React from 'react'
import TwoWayDataBinding from './TwoWayDataBinding'
import { render, cleanup, fireEvent } from './node_modules/@testing-library/react';

describe("Counter Testcases",() => {
  afterEach(cleanup)

  it('renders learn react link', () => {
    const getTwoWayDataBinding = render(<TwoWayDataBinding />);
    expect(getTwoWayDataBinding).toMatchSnapshot()
  });

  it("inputvalue",() => {
    const { getIdInputvalue} = render(<TwoWayDataBinding />); 
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    };
    fireEvent.click(getIdInputvalue('id_inputvalue'))
    expect(getIdInputvalue('inputvalue')).simulate('change', event).toHaveTextContent(the-value);
    
  })

  it("Elements Testing",() => {
    const htmlElement = document.getElementsByTagName('h1')
    expect(htmlElement).toBeInTheDocument()
  })  
});  