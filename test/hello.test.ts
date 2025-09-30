import { describe, test, expect } from '@jest/globals'
import helloController from '../src/hello'

describe('[Hello]', () => {
    test('✅ With Query String', () => {
        const name = 'kimcode'
        const result = helloController.hello(name)
        expect(result).toEqual(`👋🏻 Hello, ${name}!`)
    })

    test('❌ Without Query String', () => {
        const name = 'Unknown'
        const result = helloController.hello(name)
        expect(result).toEqual(`👋🏻 Hello, Unknown!`)
    })
})