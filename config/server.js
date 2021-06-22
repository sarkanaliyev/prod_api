module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "94f4b8fbb97867d70134067a3108edad"),
    },
  },
});
