import { render, screen } from '@testing-library/react'
import Login from './Login'

describe('Login', () => {
  test('renders without crashing', () => {
    render(<Login />)
    const prompt = screen.getByText(/login to access the full dashboard/i)
    expect(prompt).toBeInTheDocument()
  })
})
