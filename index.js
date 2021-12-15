import "dotenv/config";
import pkg from "pg";
const { Client } = pkg;

import { UserRO } from "./user.ro.js";

import algoliaSearch from "algoliasearch";

const algoliaClient = algoliaSearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const index = algoliaClient.initIndex("first");

const dbClient = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "0005",
  database: "farmyng-backend-local",
});

await dbClient.connect();
const result = await dbClient.query(`SELECT * from "User";`);
const users = result.rows.map((e) => {
  return new UserRO(
    e.id,
    e.name,
    e.phone,
    e.language,
    e.role,
    e.zipCode,
    e.points
  );
});
await dbClient.end();

await index.saveObjects(users).wait();
