require("dotenv").config();

const Discord = require("discord.js");
const { getHistory, getTodo } = require("./commands/botDMcommands");
const { createQueue } = require("./commands/queue");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("!help", { type: "LISTENING" });
});

client.on("message", async (msg) => {
  const message = msg.content.toLowerCase();

  if (!msg.channel.guild && msg.content == '!assignments') {
    getHistory(msg);
  }

  if (!msg.channel.guild && msg.content == '!todo') {
    getTodo(msg);
  }

  if (message.startsWith("!pizza")) {
    msg.react("🍕");
  }

  if (message.startsWith("!queue")) {
    content = message.substr(message.indexOf(" ") + 1);
    content = content.split(" ");
    if (content.length == 1) {
      createQueue(msg, content);
    } else if (content.length == 2) {
      msg.react("🍕");
    } else {
      msg.channel.send("bitch wut");
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
