import React from 'react'
import ComponentWithProps from "../ComponentWithProps"
import { create } from 'react-test-renderer'

test('it should render the correct heading from props when a header prop is supplied', () => { 
    const testHeader = 'Some string'
    const testRenderer = create(<ComponentWithProps header={testHeader} />)
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('h1').children).toContain(testHeader)
 });

 test('it should render the correct content from props when a content prop is supplied', () => { 
    const testContent = 'Some string'
    const testRenderer = create(<ComponentWithProps content={testContent} />)
    const testInstance = testRenderer.root;
    expect(testInstance.findAllByType('p')[0].children).toContain(testContent)
 });

 test('it should render the correct number of props when a number prop is supplied', () => { 
    const testNumber = 15
    const testRenderer = create(<ComponentWithProps number={testNumber} />)
    const testInstance = testRenderer.root;
    expect(testInstance.findAllByType('p')[1].children).toContain(testNumber.toString())
 });