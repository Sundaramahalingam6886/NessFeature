//import { MongoClient } from "mongodb";
//var MongoClient = require('mongodb').MongoClient;
import featureSchema from "./database/schema";

interface IFeatureData {
    feature_name: string;
    feature_type: string;
    feature_description: string;
    feature_created_timestamp: Date;
    feature_version: Number;
    feature_owner: string;
    feature_data: Number;
}

class FeatureStore {

    constructor() { }

    async GetAllFeatures() {

        var queryResult = await featureSchema.find(function (err: any, features: any) {
            if (err) return console.error("Error" + err);
            console.log("Features " + features);
        });

        return queryResult;

        // feature.find(function (err: any, features: any) {
        //     if (err) return console.error(err);
        //     console.log(features);
        // });


        // MongoClient.connect(this.url, { useUnifiedTopology: true }, function (err: any, db: any) {
        //     if (err) throw err;
        //     var dbo = db.db("mydb");
        //     dbo.collection("featurelist").find().toArray(function (err: any, result: any) {
        //         if (err) throw err;
        //         console.log(result[0].feature_name);
        //         queryResult = result[0].feature_name;
        //         db.close();
        //     });
        // });

        // console.log(queryResult);


    }

    GetFeatureById(req:any) {
      var queryResult = featureSchema.findById(req.params.id);
      return queryResult;
    }

    async AddFeature(req: any) {

        console.log("post service called");

        const feature = new featureSchema({
            feature_name: req.feature_name,
            feature_type: req.feature_type,
            feature_description: req.feature_description,
            feature_created_timestamp: req.feature_created_timestamp,
            feature_version: req.feature_version,
            feature_owner: req.feature_owner,
            feature_data: req.feature_data
        });
        try {
            const savedFeature = await feature.save();
            return savedFeature;
        } catch (err) {

        }
    }

    UpdateFeature() {

    }

    async RemoveFeature(req: any) {
        try {
            await featureSchema.findByIdAndRemove(req.params.id, function (err: any, docs: any) {

            });
        } catch (error) {

        }
    }

}

let featureStoreInstance = new FeatureStore();

export default function featureStoreInstanceFactory() {
    return featureStoreInstance;
} 