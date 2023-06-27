import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'ed3c5230ab7f82c3c81ccafe0abfba6b3dd2c418', queries });
export default client;
  