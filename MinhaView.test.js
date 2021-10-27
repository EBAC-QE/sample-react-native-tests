import { expect } from '@jest/globals'
import React from 'react'
import renderer from 'react-test-renderer'
import MinhaView from './MinhaView'
import { cliqueAqui } from './MinhaView'

test('verifica renderização', ()=>{
    const tree = renderer.create(<MinhaView />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('verifica cliqueAqui', ()=>{
    expect(cliqueAqui()).toBeTruthy()
})