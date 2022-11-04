// import { MongoClient } from "mongodb";

// const uri= process.env.DB_URL;
// const options = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }

// const client = new MongoClient(uri, options)
// const clientPromise = client.connect()
// export default clientPromise;

import { MongoClient } from 'mongodb';

const uri = process.env.DB_URL;
const options = {
    // useNewUrlParser : true,
    useUnifiedTopology : true   
}

const client = new MongoClient(uri, options);
const clientPromise = client.connect();
export default clientPromise;