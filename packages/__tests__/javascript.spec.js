const config = require(`../base/index`)

describe(`eslint - javascript`, () => {

    it(`should extends some package`, () => {
        expect(
            config.extends.includes(`eslint:recommended`),
        ).toBeTruthy()
        expect(
            config.extends.includes(`eslint-config-airbnb-base`),
        ).toBeTruthy()
    })

    it(`should define javascript base rules`, () => {
        expect(
            config.rules[`import/extensions`],
        ).toEqual(`off`)
        expect(
            config.rules[`import/no-unresolved`],
        ).toEqual(`off`)
        expect(
            config.rules[`import/prefer-default-export`],
        ).toEqual(`off`)
        expect(config.rules.indent).toEqual([
            `error`,
            4,
            {
                SwitchCase : 1,
            },
        ])
        expect(config.rules[`key-spacing`]).toEqual([
            `error`,
            {
                afterColon : true,
                beforeColon : true,
            },
        ])
        expect(
            config.rules[`max-classes-per-file`],
        ).toEqual(`off`)
        expect(
            config.rules[`max-len`],
        ).toEqual(`off`)
        expect(
            config.rules[`max-params`],
        ).toEqual([`error`, 3])
        expect(
            config.rules[`newline-per-chained-call`],
        ).toEqual(`error`)
        expect(
            config.rules[`no-console`],
        ).toEqual(`off`)
        expect(
            config.rules[`no-debugger`],
        ).toEqual(`off`)
        expect(
            config.rules[`object-curly-newline`],
        ).toEqual(
            [`error`, { ExportDeclaration : { minProperties : 2, multiline : true }, ImportDeclaration : { minProperties : 2, multiline : true } }],
        )
        expect(
            config.rules[`object-curly-spacing`],
        ).toEqual([`error`, `always`])
        expect(
            config.rules[`padded-blocks`],
        ).toEqual([
            `error`,
            {
                classes : `always`,
            },
        ])
        expect(
            config.rules[`prefer-destructuring`],
        ).toEqual(`error`)
        expect(
            config.rules.semi,
        ).toEqual([`error`, `never`])
        expect(
            config.rules[`space-before-function-paren`],
        ).toEqual([`error`, `always`])
        expect(
            config.rules[`prefer-object-spread`],
        ).toEqual(`error`)
        expect(
            config.rules.quotes,
        ).toEqual([
            `error`,
            `backtick`,
        ])
    })

})
