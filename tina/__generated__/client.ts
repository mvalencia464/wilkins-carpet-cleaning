import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '1ae312568159920fafbdd2c2f725fc719768b103', queries,  });
export default client;
  