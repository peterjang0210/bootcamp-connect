const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CohortIDSchema = new Schema ({
    name: {
        type: String,
        required: "name is required"
    },
    cohortID:{
        type: String,
        required: "cohortID is required"
    }
});

const CohortID = mongoose.model("CohortID", CohortIDSchema);

module.exports = CohortID;