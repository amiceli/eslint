const config = require(`../ts/index`)

describe(`eslint - @typescript`, () => {

    it(`should extends some package`, () => {
        expect(
            config.extends.includes(`eslint:recommended`),
        ).toBeTruthy()
        expect(
            config.extends.includes(`plugin:@typescript-eslint/recommended`),
        ).toBeTruthy()
        expect(
            config.extends.includes(`airbnb-typescript/base`),
        ).toBeTruthy()
    })

    it(`should inherite from Javascript rules`, () => {
        expect(config.rules[`newline-per-chained-call`]).toEqual(`error`)
    })

    it(`should disable some Javescript rule`, () => {
        expect(config.rules.indent).toEqual(`off`)
        expect(config.rules.quotes).toEqual(`off`)
        expect(config.rules.semi).toEqual(`off`)
        expect(config.rules[`object-curly-spacing`]).toEqual(`off`)
        expect(config.rules[`space-before-blocks`]).toEqual(`off`)
        expect(config.rules[`space-before-function-paren`]).toEqual(`off`)
    })

    it(`should contains eslint rules for typescript`, () => {
        expect(
            config.rules[`@typescript-eslint/explicit-member-accessibility`],
        ).toEqual(`error`)
        expect(
            config.rules[`@typescript-eslint/indent`],
        ).toEqual([`error`, 4, {
            SwitchCase : 1,
        }])
        expect(
            config.rules[`@typescript-eslint/no-inferrable-types`],
        ).toEqual(`off`)
        expect(
            config.rules[`@typescript-eslint/object-curly-spacing`],
        ).toEqual([`error`, `always`])
        expect(
            config.rules[`@typescript-eslint/parameter-properties`],
        ).toEqual(`error`)
        expect(
            config.rules[`@typescript-eslint/prefer-readonly`],
        ).toEqual(`error`)
        expect(
            config.rules[`@typescript-eslint/semi`],
        ).toEqual([`error`, `never`])
        expect(
            config.rules[`@typescript-eslint/space-before-blocks`],
        ).toEqual([`error`])
        expect(
            config.rules[`@typescript-eslint/space-before-function-paren`],
        ).toEqual([`error`, `always`])
    })

})
