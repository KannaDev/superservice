var Twit = require('twit');
    Sentiment = require('sentiment');
var sentiment = new Sentiment();

var T = new Twit({
  consumer_key: 'gvkZKbuuo6jSm9JW0fQn9fzfC',
  consumer_secret:      '5cHrXk7tt0LyY5jOwAyvHIOSee9Q1NkSFkFZA1gbovp5oBwNQv',
  access_token:         '4209083412-sGL2g2kRc1EP25UYi2W3PimIlPkfbEeQxBAE2zP',
  access_token_secret:  'FdOpOJDoPKuFTlBELQnHvxqzz3AeKh0kkPUAUZGs01Xbu',

})

T.get('search/tweets', { q : '"T-Mobile" since:2018-09-28', count: 100 }, function(err, data, response) {
  var aggregate = 0,
      numScores = 0;
  for (var i in data.statuses) {
    if (data.statuses[i].lang === 'en') {
      var s = sentiment.analyze(data.statuses[i].text);
      aggregate += s.score;
      if (s.score !== 0){
        numScores +=1;
      }
      else{
        numScores +=0;
      }


    }

  }

  console.log(((aggregate/numScores)*10)+50);
});
