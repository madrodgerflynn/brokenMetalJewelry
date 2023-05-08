const mongoose = require ('mongoose');

mongoose.connect(
    process.env.MONGODB_URI ||'mongodb+srv://madrodgerflynn:madrodgerflynn@brokenmetaljewerly.vcoxikx.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }

);

module.exports = mongoose.connection;