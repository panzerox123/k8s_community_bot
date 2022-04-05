const { createEventAdapter, errorCodes } = require("@slack/events-api");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;

const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET, {
  includeBody: true,
  includeHeaders: true
});

slackEvents.on("reaction_added", (ev, body)=>{
    if(body.reaction=="eyes") console.log("Upped thumbs !?!");
});

app.use("/events/api/", slackEvents.requestListener());

app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`k8s community bot running on ${PORT}`);
})
