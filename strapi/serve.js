const strapi = require('strapi/lib/Strapi')
const log = require('electron-log')

if(process.env.NODE_ENV == 'production') {
  Object.assign(console, log.functions);
}

strapi({
  dir: __dirname,
  autoReload: true,
  serveAdminPanel: true,
}).start().then(() => {
  process.send('ready')
}).catch((e) => {
  console.log(e);
})

