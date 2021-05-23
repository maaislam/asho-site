const dev = process.env.NODE_ENV !== 'production';

export const baseURL = dev
  ? 'https://barometric-radar.000webhostapp.com'
  : 'https://barometric-radar.000webhostapp.com';

export const server = dev ? 'http://localhost:3000' : 'https://musing-sinoussi.netlify.app/';
