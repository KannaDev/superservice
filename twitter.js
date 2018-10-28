const superagent = require('superagent');

getData();
async function getData() {
  let { body } = await superagent.get(`https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular`)
    .set("Authorization", `OAuth oauth_consumer_key=${process.env.TWITTER_API}`);
  console.log(body);
}