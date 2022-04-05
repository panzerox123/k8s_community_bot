const { createEventAdapter, errorCodes } = require("@slack/events-api");

const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET, {
  includeBody: true,
  includeHeaders: true
});

slackEvents.on("reaction_added", (ev, body)=>{
    if(body.reaction=="thumbsup") console.log("Upped thumbs !?!");
})