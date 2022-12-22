module.exports = {
    extends : [
        `eslint:recommended`,
        `eslint-config-airbnb-base`,
        `plugin:import/recommended`,
    ],
    rules : {
        "import/extensions" : `off`,
        "import/no-unresolved" : `off`,
        "import/prefer-default-export" : `off`,
        indent : [
            `error`,
            4,
            {
                SwitchCase : 1,
            },
        ],
        "key-spacing" : [
            `error`,
            {
                afterColon : true,
                beforeColon : true,
            },
        ],
        "max-classes-per-file" : `off`,
        "max-len" : `off`,
        "max-params" : [`error`, 3],
        "newline-per-chained-call" : `error`,
        "no-console" : `off`,
        "no-debugger" : `off`,
        "object-curly-newline" : [
            `error`,
            {
                ImportDeclaration : `never`,
                ExportDeclaration : `never`,
            },
        ],
        "object-curly-spacing" : [
            `error`,
            `always`,
        ],
        "padded-blocks" : [
            `error`,
            {
                classes : `always`,
            },
        ],
        "prefer-destructuring" : `error`,
        semi : [
            `error`,
            `never`,
        ],
        "space-before-function-paren" : [
            `error`,
            `always`,
        ],
        "prefer-object-spread" : `error`,
        quotes : [
            `error`,
            `backtick`,
        ],
    },
    overrides : [
        {
            files : [`**/__tests__/*.spec.{j,t}s?(x)`],
            env : {
                jest : true,
                jasmine : true,
            },
        },
    ],
}
