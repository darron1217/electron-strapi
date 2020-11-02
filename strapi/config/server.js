module.exports = {
  host: '127.0.0.1',
  port: process.env.PORT || process.platform === 'win32' ? 100 : 2000,
  admin: {
    auth: {
      secret: 'ad1c40dd06ba76b1aeaec702523aedd8',
    },
  },
};
