require('dotenv').config();
const readline = require('readline');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const tone_analyzer = new ToneAnalyzerV3({
  username: process.env.TONE_ANALYZER_USERNAME,
  password: process.env.TONE_ANALYZER_PASSWORD,
  version_date: process.env.TONE_ANALYZER_VERSION_DATE
});


var utterances = [
    {
      text: "Hello, I'm having a problem with your product.",
      user: "customer"
    },
    {
      text: "OK, let me know what's going on, please.",
      user: "agent"
    },
    {
      text: "Well, nothing is working :(",
      user: "customer"
    },
    {
      text: "Sorry to hear that.",
      user: "agent"
    }
  ]


var toneChatParams = {
  utterances: utterances
};

tone_analyzer.toneChat(toneChatParams, function (error, utteranceAnalyses) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(utteranceAnalyses, null, 2));
  }
});
0;
