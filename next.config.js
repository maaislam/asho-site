const dev = process.env.NODE_ENV !== 'production';
module.exports = {
  env: {
    baseURL: dev ? 'http://localhost:3000' : 'https://musing-sinoussi-985e12.netlify.app',
  },
};
