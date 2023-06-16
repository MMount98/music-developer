const db = require("../config/connection");
const { MusicUser, VenueUser } = require("../models/index");

const musicUserSeed = require("./musicUserSeed.json");
const venueUserSeed = require("./venueUserSeed.json");

db.once("open", async () => {
  try {
    /******** MusicUser  ********/
    await MusicUser.deleteMany({});
    await MusicUser.create(musicUserSeed);
    console.log(" **** MusicUser Seeded  ****");

    /******** VenueUser  ********/

    await VenueUser.deleteMany({});
    await VenueUser.create(venueUserSeed);
    console.log("**** VenueUser Seeded ****");

    console.log("**** All varibales Seeded ****");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
