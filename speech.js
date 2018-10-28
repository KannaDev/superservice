var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var CombinedStream = require('combined-stream');

var speechToText = new SpeechToTextV1({
  username: 'b4b1548c-5699-47ec-ae3a-68789768d203',
  password: 'p1mJGPbhP5ij'
});

var combinedStream = CombinedStream.create();
combinedStream.append(fs.createReadStream('wav2.wav'));


var recognizeParams = {
  audio: combinedStream,
  'content_type': 'audio/wav',
  speaker_labels: true,
  timestamps: false,
  'word_alternatives_threshold': 1


};

speechToText.recognize(recognizeParams, function(error, speechRecognitionResults) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(speechRecognitionResults, null, 2));
  }
});
