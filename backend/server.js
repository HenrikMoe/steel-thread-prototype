const express = require('express');
const cors = require('cors'); // Import the 'cors' middleware
const app = express();
const port = process.env.PORT || 3000; // You can change the port as needed
const openai = require('openai');
const axios = require('axios');


// Use the 'cors' middleware to enable CORS for all routes
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

// Define a route that doesn't require authentication
app.get('/api/some-route', (req, res) => {
  // Your route logic goes here
  res.json({ message: 'This route does not require authentication.' });
});



const { CHAT_KEY } = process.env;
console.log(CHAT_KEY)
app.post('/api/chatgpt', async (req, res) => {
  const { prompt } = req.body; // Extract the 'prompt' from the request body
  console.log(prompt)
  const chatgptRequest = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: prompt }, // Construct the message object
    ],
    temperature: 0.7,
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${CHAT_KEY}`,
  };

  try {
    axios
      .post('https://api.openai.com/v1/chat/completions', chatgptRequest, {
        headers: headers,
      })
      .then((response) => {
        console.log('Response:', response.data.choices[0].message.content);
        res.json({ text: response.data.choices[0].message.content });
      })
      .catch((error) => {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const { MongoClient, ServerApiVersion } = require('mongodb');


const { MONGODB_URI } = process.env;

// Create a MongoClient with the MongoDB URI and configure the Stable API version
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.post('/api/user-info', async (req, res) => {
  try {
    // Extract the data you want to write to the "admin" database from req.body
    const { given_name, family_name, email, locale } = req.body; // Replace with actual keys

    // Access the "admin" database
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db('');

    // Construct the document to be inserted into a specific collection
    const document = {
      key1: given_name, // Replace with actual field name
      key2: family_name, // Replace with actual field name
      key3: email, // Replace with actual field name
      key4: locale, // Replace with actual field name

    };

    // Access a specific collection within the "admin" database
    const collection = db.collection('userInfo'); // Replace with your collection name

    // Insert the document into the collection
    const result = await collection.insertOne(document);

    console.log('Inserted a document with _id:', result.insertedId);

    res.json({ message: 'Data written to the admin database successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});
