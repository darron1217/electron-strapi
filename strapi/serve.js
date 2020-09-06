const strapi = require('strapi/lib/Strapi')

strapi({
  dir: __dirname,
  autoReload: true,
  serveAdminPanel: true,
}).start().then(() => {
  process.send('ready')
}).catch((e) => {
  process.send('error')
  console.log(e);
})

