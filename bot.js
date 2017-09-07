// REQUIREMENTS
var twit = require('twit');
var config = require('./config.js');
var tweetTemplates = require('./tweet_templates.js');

var Twitter = new twit(config);


// function definition to tweet back to user who followed
function tweetNow(tweetTxt) {
  var tweet = {
      status: tweetTxt
  }
  Twitter.post('statuses/update', tweet, function(err, data, response) {
    if(err){
      console.log("Ahhhhh, everything's on fire!!!!!");
    }
    else{
      console.log("Exercise tweeted.");
    }
  });
}

// TWEET IT!!!!
// tweetNow(tweetTemplates.getTweetTemplate());

// PRACTICE IT!!!
console.log();
for (var i = 0; i < 10; i++) {
    console.log(tweetTemplates.getTweetTemplate());}
console.log();
