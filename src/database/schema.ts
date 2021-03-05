const mongo = require('mongoose');

const featureSchema = mongo.model('NessFeatures', new mongo.Schema({
    _id: String,
    feature_name: String,
    feature_type: String,
    feature_description: String,
    feature_created_timestamp: Date,
    feature_version: Number,
    feature_owner: String,
    feature_data: String
}));

export default featureSchema;
