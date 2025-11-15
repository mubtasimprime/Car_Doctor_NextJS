// import { MongoClient, ServerApiVersion } from "mongodb";

import { MongoClient, ServerApiVersion } from "mongodb";

export default async function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();
  return client.db(process.env.DB_NAME).collection(collectionName);
}
