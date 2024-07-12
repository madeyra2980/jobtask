const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
