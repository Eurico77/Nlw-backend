import knex from "knex";
import path from "path";

const connection = knex({
  client: "postgres",
  connection: {
    filename: path.resolve(__dirname, "database.postgres"),
  },
});

export default connection;
