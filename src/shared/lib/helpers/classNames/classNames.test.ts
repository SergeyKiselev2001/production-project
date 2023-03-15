import { classNames } from './classNames'

describe('classNames', () => {
  test('common case', () => {
    expect(classNames('class')).toBe('class')
  })

  test('with additional classes', () => {
    expect(classNames('class', {}, ['class2', 'class3'])).toBe(
      'class class2 class3'
    )
  })

  test('with mods', () => {
    expect(classNames('class', { rule1: true, rule2: false })).toBe(
      'class rule1'
    )
  })
})
