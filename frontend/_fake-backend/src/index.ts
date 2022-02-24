import path from "path";
import express from "express";
import { createServer } from "http";
import bodyParser from "body-parser";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { importSchema } from "graphql-import";
import { appendRegistration } from "./registration";
import { mocks } from "./mocks";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

appendRegistration(app);

const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"));
const server = new ApolloServer({
  typeDefs,
  mocks,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
  mockEntireSchema: false,
});

const httpServer = createServer(app);
httpServer.listen({ port: PORT }, async (): Promise<void> => {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  // eslint-disable-next-line no-console
  console.log(
    `\n🚀 Mock server is now running on http://localhost:${PORT} \n GraphQL playground is available on http://localhost:${PORT}/graphql`
  );
});
