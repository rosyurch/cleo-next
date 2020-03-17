/* eslint-disable */

const path = require('path')

module.exports = {
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['generic'] = path.join(__dirname, 'components/generic')
    config.resolve.alias['common'] = path.join(__dirname, 'common')

    return config
  },
}
