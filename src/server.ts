require("dotenv").config();
import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";
import client from "./client";

const apollo = new ApolloServer({
  resolvers,
  typeDefs,
  playground: true,
  introspection: true,
  context: async ({ req }) => ({
    loggedInUser: await getUser(req.headers.token),
    client,
  }),
});

const app = express();
apollo.applyMiddleware({ app });
app.use("/static", express.static("uploads"));

const PORT = process.env.PORT;
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
);

if (process.env.NODE_ENV === "dev") {
  const localtunnel = require("localtunnel");
  (async () => {
    const tunnel = await localtunnel({
      port: PORT,
      subdomain: process.env.SUBDOMAIN,
    });
    console.log(
      `${process.env.NODE_ENV}:localtunnel.url: ${tunnel.url}/graphql`
    );
    tunnel.on("close", () => {
      console.log("localtunnel closed");
    });
  })();
}
