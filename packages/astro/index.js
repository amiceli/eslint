module.exports = {
    extends : [
        // '@amiceli/eslint-config-base'
    ],
    parser : `vue-eslint-parser`,
    parserOptions : {
        extraFileExtensions : [`.vue`],
        project : [`./tsconfig.json`],
        parser : {
            // Script parser for `<script>`
            js : `espree`,

            // Script parser for `<script lang="ts">`
            ts : `@typescript-eslint/parser`,

            // Script parser for vue directives (e.g. `v-if=` or `:attribute=`)
            // and vue interpolations (e.g. `{{variable}}`).
            // If not specified, the parser determined by `<script lang ="...">` is used.
            "<template>" : `espree`,
        },
    },
    overrides : [
        {
            // Define the configuration for `.astro` file.
            files : [`*.astro`],
            // Allows Astro components to be parsed.
            parser : `astro-eslint-parser`,
            // Parse the script in `.astro` as TypeScript by adding the following configuration.
            // It's the setting you need when using TypeScript.
            parserOptions : {
                parser : `@typescript-eslint/parser`,
                extraFileExtensions : [`.astro`],
            },
            rules : {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
            },
        },
        // ...
    ],
}
