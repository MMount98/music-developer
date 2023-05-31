const { Schema, model } = require("mongoose");

const bookingsSchema = new Schema({
  band: {
    type: Schema.Types.ObjectId,
    ref: "musicUser",
  },
  venue: {
    type: Schema.Types.ObjectId,
    ref: "venueUser",
  },
  date: {
    type: Date,
  },
  status: {
    type: String,
  },
});

const bookings = model("bookings", bookingsSchema);

module.exports = { bookings };
