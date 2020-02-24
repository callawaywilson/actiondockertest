const deploy = require('.')
const { version } = require('../package.json')

deploy({
  cluster: 'production',
  tag: version
})
