import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import connectToDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 8001;
const app = express();

connectToDB();

app.use(express.json());
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development" ? true : false,
  })
);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
