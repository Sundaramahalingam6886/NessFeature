import express from "express";
import { json } from "body-parser";
import featureStoreInstanceFactory from "./featureStore";
require("./database/databaseConfig");

const app = express();
const featureStoreApiInstance = featureStoreInstanceFactory();
//middleware

app.use(express.json());

app.get("/features/", async (req: any, res: any, next: any) => {
    try {
        let result = await featureStoreApiInstance.GetAllFeatures();
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }
    res.end();
});

app.get('/features/:id', async function (req, res) {
    try {
        let result = await featureStoreApiInstance.GetFeatureById(req);
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/features/feature', async function (req, res) {
    try {
        let result = await featureStoreApiInstance.AddFeature(req);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }

});

app.delete('/feature/:id', async function (req, res) {
    try {
        let result = await featureStoreApiInstance.RemoveFeature(req);
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }
})

//api
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
