import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings.length).toBeGreaterThan(0)
    expect(headings[0]).toHaveTextContent('Matan Katsnelson')
  })

  it('renders the subtitle', () => {
    render(<Home />)
    const subtitles = screen.getAllByRole('heading', { level: 2 })
    expect(subtitles.length).toBeGreaterThan(0)
    expect(subtitles[0]).toHaveTextContent(
      /Full-stack developer and Python developer/
    )
  })

  it('renders the description paragraph', () => {
    render(<Home />)
    const descriptions = screen.getAllByText(
      /Proficient in full-stack web development/
    )
    expect(descriptions.length).toBeGreaterThan(0)
    expect(descriptions[0]).toBeInTheDocument()
  })
})
