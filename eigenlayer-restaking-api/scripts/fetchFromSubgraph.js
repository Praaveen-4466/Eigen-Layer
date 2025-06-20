// scripts/fetchFromSubgraph.js
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();

const Restaker = require("../models/Restaker"); // assumes this model exists
const connectDB = require("../utils/db"); // assumes db.js handles connection

const SUBGRAPH_URL =
  "https://api.studio.thegraph.com/query/60149/eigenlayer-restaking/version/latest";

const RESTAKERS_QUERY = `
{
  restakings(first: 10) {
    id
    restaker
    amount
    operator {
      id
    }
  }
}
`;

async function fetchAndSaveRestakers() {
  await connectDB();

  try {
    const response = await axios.post(SUBGRAPH_URL, { query: RESTAKERS_QUERY });

    const data = response.data.data?.restakings || [];
    console.log("✅ Fetched restaking entries:", data.length);

    for (const entry of data) {
      const restaker = {
        user: entry.restaker,
        amount_restaked: entry.amount,
        validator: entry.operator.id,
      };

      // Upsert to avoid duplicates
      await Restaker.updateOne(
        { user: restaker.user },
        { $set: restaker },
        { upsert: true }
      );

      console.log(`✅ Saved restaker: ${restaker.user}`);
    }

    console.log("All restakers synced!");
  } catch (err) {
    console.error("Error fetching from subgraph:", err.message);
  } finally {
    mongoose.disconnect();
  }
}

fetchAndSaveRestakers();
