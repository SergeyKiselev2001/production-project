import { render, screen } from '@testing-library/jest-dom'
import { Button, ThemeButton } from './Button'

describe('Button', () => {
  test('render test', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST'))
  })
})
