/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://coursehala_owner:qoJF76Kezwbr@ep-autumn-unit-a73ly0ma.ap-southeast-2.aws.neon.tech/coursehala?sslmode=require',
    }
  };