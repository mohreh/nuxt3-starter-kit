module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-unused-expressions': 'off',
    'vue/no-v-html': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'off',
    'vue/no-unused-vars': 'off',
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: [],
      },
    ],
  },
};
