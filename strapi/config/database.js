module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'db/strapi.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
