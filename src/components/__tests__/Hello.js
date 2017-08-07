import React from 'react'
import renderer from 'react-test-renderer'
import Hello from 'components/Hello'

describe('Hello (Snapshot)', () => {
  it('Hello renders hello world', () => {
    const component = renderer.create(<Hello />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
