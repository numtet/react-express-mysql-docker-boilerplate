module.exports = {
  type: "mysql",
  host: "ts_services_bp_db_1",
  port: 3306,
  username: "root",
  password: "root",
  database: "world",
  synchronize: true,
  logging: true,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
