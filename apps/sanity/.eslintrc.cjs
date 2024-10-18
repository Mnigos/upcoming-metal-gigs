/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'sanity/react',
    'sanity/typescript',
    '@repo/eslint-config/react.cjs',
  ],
}
