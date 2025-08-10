
import { MongoClient } from "mongodb"

const url = process.env.MONGODB_URL as string
const options = {}

if (!url) {
    throw new Error("Please check your environment variables")
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (!global._mongoClientPromise) {
    client = new MongoClient(url, options)
    global._mongoClientPromise = client.connect()
}

clientPromise = global._mongoClientPromise

export default clientPromise