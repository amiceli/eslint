const config = require(`../vue/index`)

describe(`eslint - vue`, () => {

    it(`should extends some package`, () => {
        expect(
            config.extends.includes(`plugin:vue/recommended`),
        ).toBeTruthy()
    })

    it(`should define javascript base rules`, () => {
        expect(
            config.rules[`vue/html-indent`],
        ).toEqual(
            [`error`, 4, {
                attribute : 1,
                baseIndent : 1,
                closeBracket : 0,
                alignAttributesVertically : true,
                ignores : [],
            }],
        )
        expect(
            config.rules[`vue/html-self-closing`],
        ).toEqual(
            [`error`, {
                html : {
                    void : `never`,
                    normal : `never`,
                    component : `always`,
                },
                svg : `always`,
                math : `always`,
            }],
        )
        expect(
            config.rules[`vue/script-indent`],
        ).toEqual(
            [`error`, 4, {
                baseIndent : 1,
                switchCase : 0,
                ignores : [],
            }],
        )
        expect(
            config.rules[`vue/no-v-html`],
        ).toEqual(`off`)
        expect(
            config.rules[`no-param-reassign`],
        ).toEqual(
            [
                `error`,
                {
                    props : true,
                    ignorePropertyModificationsFor : [`state`],
                },
            ],
        )
    })

})
