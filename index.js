'use strict'

let optional = 1
let required = 2

module.exports = {
  extends: 'mn-component',
  env: {
    mocha: true,
    protractor: true,
  },
  globals: {
    angular: true,
    expect: true,
  },
  plugins: [
    'angular',
  ],
  rules: {'angular/module-getter': required,
    'angular/module-setter': required,
    'angular/no-private-call': required,
    'angular/component-limit': required,
    'angular/controller-as-route': required,
    'angular/controller-as': required,
    'angular/controller-name': required, // need improve regex
    // 'angular/file-name': required // need other options, like dot syntax intead camelcase
    'angular/di': [required, 'function'],
    'angular/function-type': [required, 'named'],
    'angular/angularelement': [required],
    'angular/definedundefined': [required],
    'angular/typecheck-array': required,
    'angular/typecheck-date': required,
    'angular/typecheck-function': required,
    'angular/typecheck-number': required,
    'angular/typecheck-object': required,
    'angular/typecheck-string': required
  }
}
