const {App} = require("@slack/bolt");
const PORT = process.env.PORT || 8080;

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

app.event("reaction_added", (ev) => {
  console.log(ev);
  if(ev.reaction=="eyes") console.log("EYES?!");
})

async function main(){
  await app.start(PORT);
  console.log(`k8s community bot running on ${PORT}`);
}

main();
/*
const { createEventAdapter, errorCodes } = require("@slack/events-api");
const express = require("express");
const app = express();


const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;

const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET, {
  includeBody: true,
  includeHeaders: true
});

slackEvents.on("reaction_added", (ev, body)=>{
    if(ev.reaction=="eyes") console.log("Upped thumbs !?!");
});

app.use("/events/api/", slackEvents.requestListener());

app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`k8s community bot running on ${PORT}`);
})
*/
