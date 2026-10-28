module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: ['test.setup.ts', 'step-definitions/**/*.ts'],
    format: ['progress'],
  },
}
