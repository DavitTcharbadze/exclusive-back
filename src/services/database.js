const { MongoClient } = require('mongodb');

require('dotenv').config();

// const uri = `mongodb+srv://${process.env.MONGODB_USEERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.e5hbong.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri = 'mongodb+srv://dev:cmRtRArf5Ip6MsuG@cluster0.e5hbong.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db('exclusive_db');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = { connectToDatabase, client };
