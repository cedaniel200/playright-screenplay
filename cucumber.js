module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: ['test.setup.ts', 'step-definitions/**/*.ts'],
    format: ['progress', 'html:reports/cucumber-report.html'],
  },
}
