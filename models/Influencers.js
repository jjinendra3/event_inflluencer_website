const mongoose = require("mongoose");
const Users = require("./Users");
const { Schema } = mongoose;

const InfluencerSchema = Users.discriminator(
  "Influencer",
  new Schema({
    platform: {
      type: Map, //many platforms,  link:number of followers
      required: true,
      default: { defaultPlatform: "defaultHandle" },
    },
    genre: {
      type: String,
      required: true,
    },
    companycontracts: {
      type: Array,
      of: String,
      default: ["init"],
      required: true,
    },
    eventcontracts: {
      type: Array,
      of: String,
      default: ["init"],
      required: true,
    },
  }),
);
module.exports = mongoose.model("Influencer");
