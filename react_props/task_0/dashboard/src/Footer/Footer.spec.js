import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import { getCurrentYear, getFooterCopy } from '../utils/utils'

describe('Footer', () => {
  test('renders without crashing', () => {
    render(<Footer />)
    const yearText = screen.getByText(new RegExp(`copyright ${getCurrentYear()} - holberton school`, 'i'))
    expect(yearText).toBeInTheDocument()
  })

  test('renders footer copy text', () => {
    render(<Footer />)
    const footerCopy = screen.getByText(new RegExp(getFooterCopy(false), 'i'))
    expect(footerCopy).toBeInTheDocument()
  })
})
