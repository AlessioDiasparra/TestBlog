import { request, gql } from "graphql-request";

export const hygraph = query =>
  request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl88y2xlc1scu01uh2t1j43cx/master",
    query
  );
