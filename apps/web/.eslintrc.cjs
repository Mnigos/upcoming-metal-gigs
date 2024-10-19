/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/next.cjs'],
  overrides: [
    {
      files: ['**/sanity/types.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/array-type': 'off',
      },
    },
  ],
}
