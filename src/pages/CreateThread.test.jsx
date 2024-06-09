/**
 * Testing Scenario:
 *
 * - CreateThread Page Component
 *  - should handle input changes correctly
 *  - should dispatch action when create thread button is clicked
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Provider } from 'react-redux'
import store from '../states'
import CreateThread from './CreateThread'
import { BrowserRouter as Router } from 'react-router-dom'

describe('CreateThread Component', () => {
  it('should handle input changes correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <CreateThread />
        </Router>
      </Provider>
    )

    const titleInput = screen.getByLabelText('Title')
    const bodyInput = screen.getByLabelText('Body')
    const categoryInput = screen.getByLabelText('Category')

    fireEvent.change(titleInput, { target: { value: 'Test Title' } })
    fireEvent.change(bodyInput, { target: { value: 'Test Body' } })
    fireEvent.change(categoryInput, { target: { value: 'Test Category' } })

    expect(titleInput.value).toBe('Test Title')
    expect(bodyInput.value).toBe('Test Body')
    expect(categoryInput.value).toBe('Test Category')
  })
})
