import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  test('renders without crashing', () => {
    render(<Header />)
    const heading = screen.getByRole('heading', { name: /school dashboard/i })
    expect(heading).toBeInTheDocument()
  })
})
