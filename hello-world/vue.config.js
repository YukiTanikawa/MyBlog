const path = require('path');

module.export = {
  build: {
    assetsPublicPath: '',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
}