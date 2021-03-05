import express from "express";
import { json } from "body-parser";
import featureStoreInstanceFactory from "./featureStore";
require("./database/databaseConfig");

const app = express();
const featureStoreApiInstance = featureStoreInstanceFactory();
//middleware

app.use(express.json());

app.get("/features/", async (req: any, res: any, next: any) => {
    let result = await featureStoreApiInstance.GetAllFeatures();
    res.send(result);
    res.end();
});

// app.get("/feature/:id", (req: any, res: any, next: any) => {
//     console.log("Http logging middleware");
//     next();
// }, (req: any, res: any, next: any) => {
//     console.log("Http validating");
//     next();
// }, (req: any, res: any, next: any) => {
//     res.send("Got a Get Request with id");
//     res.end();
// });

app.post('/features/feature', async function (req, res) {
    console.log(req);
    
    let result = await featureStoreApiInstance.AddFeature(req);
    res.send(result);
});

app.put('/features/:id', async function (req, res) {
    let result = await featureStoreApiInstance.GetFeatureById(req);
    res.send(result);
});

app.delete('/feature/:id', async function (req, res) {
    let result = await featureStoreApiInstance.RemoveFeature(req);
    res.send(result);
})

//api
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
