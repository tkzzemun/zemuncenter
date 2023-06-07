import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'acfa6ded7a90b1e2294adcf7d79a2ded0652c2c3', queries });
export default client;
  