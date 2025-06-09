const city = require("../models/city");
const Airportsrepo = require("./airport-repo");
const flightsrepo = require("./flight-repo");

module.exports={
    Airplanerepo:require("./airplane-repository"),
    cityrepo: require("./city-repository"),
    Airportsrepo:require("./airport-repo"),
    Flightsrepo:require("./flight-repo")
}