import Header from "../Components/Header"
import React from 'react'
import { create } from 'react-test-renderer'

test('Header matches snapshot', () => { 
    const header = create(<Header />)
    expect(header.toJSON()).toMatchSnapshot()
 });