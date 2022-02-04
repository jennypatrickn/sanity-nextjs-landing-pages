const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "g0i2vtjc",
  dataset: "production",
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2022-01-31",
});

module.exports = client;
