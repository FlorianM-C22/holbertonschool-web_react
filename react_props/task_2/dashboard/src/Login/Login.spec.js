import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login'

describe('Login', () => {
  test('renders without crashing', () => {
    render(<Login />)
    const prompt = screen.getByText(/login to access the full dashboard/i)
    expect(prompt).toBeInTheDocument()
  })

  test('contains two labels, two inputs, and one button', () => {
    const { container } = render(<Login />)
    const labels = container.querySelectorAll('label')
    const inputs = container.querySelectorAll('input')
    const buttons = container.querySelectorAll('button')

    expect(labels.length).toBe(2)
    expect(inputs.length).toBe(2)
    expect(buttons.length).toBe(1)
  })

  test('focuses inputs when the related labels are clicked', async () => {
    render(<Login />)
    const user = userEvent.setup()

    const emailLabel = screen.getByText(/email/i)
    const emailInput = screen.getByLabelText(/email/i)
    await user.click(emailLabel)
    expect(emailInput).toHaveFocus()

    const passwordLabel = screen.getByText(/password/i)
    const passwordInput = screen.getByLabelText(/password/i)
    await user.click(passwordLabel)
    expect(passwordInput).toHaveFocus()
  })
})
