require("dotenv").config();

const Discord = require("discord.js");
const { sendCommands } = require("./commands/help");
const { getHistory, getTodo, getAnon } = require("./commands/botDMcommands");
const {
  createQueue,
  deleteQueue,
  printQueue,
  addToQueue,
  sendPosition,
  remFromQueue,
  processQueue,
} = require("./commands/queue");
const { studyGroup, fetchMessages } = require("./commands/studyGroup");
const { assignmentCreation } = require("./commands/assignmentCreation");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("!help", { type: "LISTENING" });
});

client.on("message", async (msg) => {
  const message = msg.content.toLowerCase();

  if (!msg.channel.guild && msg.content == "!history") {
    getHistory(msg);
  }

  if (!msg.channel.guild && msg.content == "!todo") {
    getTodo(msg);
  }

  if (message.startsWith("!help")) {
    sendCommands(msg);
  }

  if (!msg.channel.guild && msg.content.startsWith("!anon")) {
    getAnon(msg, client);
  }

  if (message.startsWith("!pizza")) {
    msg.react("🍕");
  }

  if (message.startsWith("!studygroup")) {
    content = message.substr(message.indexOf(" ") + 1);
    studyGroup(msg, content);
  }

  if (message.startsWith("!fetch")) {
    fetchMessages(msg, client);
    //msg.delete({ timeout: 1000 });
  }

  if (message.startsWith("!queue")) {
    content = message.substr(message.indexOf(" ") + 1);
    content = content.split(" ");

    if (content.length === 1) {
      createQueue(msg, content[0]);
    } else if (content.length === 2) {
      if (content[1] === "delete") deleteQueue(msg, content[0]);
      else if (content[1] === "print") printQueue(msg, content[0]);
      else if (content[1] === "add") addToQueue(msg, content[0]);
      else if (content[1] === "order") sendPosition(msg, content[0]);
      else if (content[1] === "remove") remFromQueue(msg, content[0]);
      else if (content[1] === "next") processQueue(msg, content[0]);
      else msg.channel.send("Your command is not recognized");
    } else {
      msg.channel.send("You entered too many inputs");
    }
    //msg.delete();
  }

  if (message.startsWith("!assignment")) {
    assignmentCreation(msg, message.content, client);
  }
});

client.login(process.env.DISCORD_TOKEN);
