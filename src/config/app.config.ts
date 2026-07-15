export default () => ({
  app: {
    name: process.env.APP_NAME,
    port: Number(process.env.PORT) || 3000,
    url: process.env.APP_URL,
    env: process.env.NODE_ENV,
  },
});
