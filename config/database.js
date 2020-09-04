const homedir = require('os').homedir();

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', homedir + '/strapi.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
