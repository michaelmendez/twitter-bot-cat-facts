const http = require('http');
const axios = require('axios').default;
const cron = require('node-cron');
const { TwitterApi } = require('twitter-api-v2');
const {
  APP_KEY,
  APP_SECRET,
  ACCESS_SECRET,
  ACCESS_TOKEN,
  PORT,
} = require('./config');

const client = new TwitterApi({
  appKey: APP_KEY,
  appSecret: APP_SECRET,
  accessToken: ACCESS_TOKEN,
  accessSecret: ACCESS_SECRET,
});

const getCatFact = async () => {
  try {
    const response = await axios.get(`https://catfact.ninja/fact`);
    const { fact = '' } = response.data || {};
    return fact;
  } catch (error) {
    throw error;
  }
};

cron.schedule('0 0 12 * * *', async () => {
  try {
    const catFact = await getCatFact();

    if (!catFact) {
      throw new Error('Something happened with the cat fact API!');
    }

    const catFactWithHashtags = `${catFact} #catFact #cat #cats`;
    await client.v1.tweet(catFactWithHashtags);
    console.log('Tweet posted successfully!');
  } catch (error) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
});

const server = http.createServer();
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
