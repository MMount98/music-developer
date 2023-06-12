const db = require("../config/connection");
const { musicUser, venueUser } = require("../models/index");

const musicUserSeed = require("./musicUserSeed.json");
const venueUserSeed = require("./venueUserSeed.json");

db.once("open", async () => {
  try {
    /******** MusicUser  ********/
    await musicUser.deleteMany({});
    await musicUser.create(musicUserSeed);
    console.log(" **** MusicUser Seeded  ****");

    /******** VenueUser  ********/

    await venueUser.deleteMany({});
    await venueUser.create(venueUserSeed);
    console.log("**** VenueUser Seeded ****");

    console.log("**** All varibales Seeded ****")
    process.exit(0)
  } catch (err) {
    throw err;
  }
});
