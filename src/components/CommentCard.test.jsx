/**
 * Testing Scenario:
 *
 * - CommentCard Component
 *  - should render comment card correctly
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import CommentCard from './CommentCard'
import { describe, it, expect } from 'vitest'

describe('CommentCard Component', () => {
  const mockComment = {
    content: 'Test Comment',
    createdAt: '2024-06-10T12:00:00Z',
    owner: {
      name: 'Test User',
      avatar: 'test.jpg'
    }
  }

  it('should render comment card correctly', () => {
    render(<CommentCard comment={mockComment} />)

    const contentElement = screen.getByText(mockComment.content)
    const nameElement = screen.getByText(`By: ${mockComment.owner.name}`)
    const createdAtElement = screen.getByText('2024-06-10T12:00:00Z')

    expect(contentElement).toBeTruthy()
    expect(nameElement).toBeTruthy()
    expect(createdAtElement).toBeTruthy()
  })
})
