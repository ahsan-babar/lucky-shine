const config = require('config');
const { resolve } = require('path');

module.exports = {
  ...config.get('mysqlConfiguration'),
  entities: [resolve(__dirname + '/src/**/*.entity.ts')],
  seeds: ['seeds/**/*.ts'],
  logging: true  
};