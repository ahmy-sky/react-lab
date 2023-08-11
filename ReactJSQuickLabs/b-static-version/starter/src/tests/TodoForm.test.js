import React from "react";
import { act, create } from 'react-test-renderer'
import ToDo from "../Components/ToDo";
import TodoForm from "../Components/TodoForm";

jest.mock('../Components/utils/DateCreated', () => {
    return MockDateCreated = () => <span testid='dateCreated'>Date Created Component</span>
    
})

describe('Todo Form test suite', () => {
    describe('DateCreated function and render tests', () => {
        test('dunno', () => { 
            const testRenderer = create(<TodoForm />)
            const testInstance = testRenderer.root
            const dateCreated = testInstance.find(e1 => e1.type === 'span' && e1.props.testid === 'dateCreated')

            expect(dateCreated).toBeTruthy()
            expect(dateCreated.children).toContain('Date Created Component')
         })
    })
    describe('it should render the new value in the input when todoDescription onChange is activated', () => {
        const testValue = 'Test'
        const testRenderer = create(<TodoForm />)
        const testInstance = testRenderer.root
        const descInput = testInstance.findByProps({name: 'todoDescription'})

        expect(descInput.props.value).toBe('')

        act(() => descInput.props.onChange({target: {value: testValue}}))

        expect(descInput.props.value).toBe(testValue)
    })
})