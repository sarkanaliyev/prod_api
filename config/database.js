module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "104.248.242.78"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "project_miq"),
        username: env("DATABASE_USERNAME", "miq"),
        password: env("DATABASE_PASSWORD", "zft3cMAZZR!o"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
