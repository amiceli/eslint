module.exports = {
    extends : [
        `eslint:recommended`,
        `plugin:vue/vue3-essential`,
        `@vue/eslint-config-typescript`,
    ],
    rules : {
        'vue/html-indent' : [`error`, 4, {
            attribute : 1,
            baseIndent : 1,
            closeBracket : 0,
            alignAttributesVertically : true,
            ignores : [],
        }],
        'vue/html-self-closing' : [`error`, {
            html : {
                void : `never`,
                normal : `never`,
                component : `always`,
            },
            svg : `always`,
            math : `always`,
        }],
        "vue/script-indent" : [`error`, 4, {
            baseIndent : 1,
            switchCase : 0,
            ignores : [],
        }],
        'vue/no-v-html' : `off`,
        "no-param-reassign" : [
            `error`,
            {
                props : true,
                ignorePropertyModificationsFor : [`state`],
            },
        ],
    },
    overrides : [
        {
            files : [`*.vue`],
            rules : {
                indent : `off`,
                '@typescript-eslint/indent' : `off`,
            },
        },
    ],
}
