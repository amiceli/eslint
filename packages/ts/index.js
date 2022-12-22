const JavascriptConfig = require(`@amiceli/eslint-config-base`)

module.exports = {
    root : true,
    parser : `@typescript-eslint/parser`,
    plugins : [
        `@typescript-eslint`,
    ],
    extends : [
        `eslint:recommended`,
        `plugin:@typescript-eslint/recommended`,
        `airbnb-typescript/base`,
        `plugin:import/recommended`,
        `plugin:import/typescript`,
    ],
    rules : {
        ...JavascriptConfig.rules,

        // Disable some Javascript rules

        indent : `off`,
        "object-curly-spacing" : `off`,
        semi : `off`,
        quotes : `off`,
        "space-before-blocks" : `off`,
        "space-before-function-paren" : `off`,

        // Typescript rules

        "@typescript-eslint/quotes" : [
            `error`,
            `backtick`,
        ],
        "@typescript-eslint/explicit-member-accessibility" : `error`,
        "@typescript-eslint/indent" : [
            `error`,
            4,
            {
                SwitchCase : 1,
            },
        ],
        "@typescript-eslint/no-inferrable-types" : `off`,
        "@typescript-eslint/object-curly-spacing" : [
            `error`,
            `always`,
        ],
        "@typescript-eslint/parameter-properties" : `error`,
        "@typescript-eslint/prefer-readonly" : `error`,
        "@typescript-eslint/semi" : [
            `error`,
            `never`,
        ],
        "@typescript-eslint/space-before-blocks" : [
            `error`,
        ],
        "@typescript-eslint/space-before-function-paren" : [
            `error`,
            `always`,
        ],
    },
    settings : {
        'import/resolver' : {
            node : {
                extensions : [`.js`, `.jsx`, `.ts`, `.tsx`],
                moduleDirectory : [`node_modules`, `src/`],
            },
        },
    },
    overrides : [
        ...JavascriptConfig.overrides,
    ],
}
