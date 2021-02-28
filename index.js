require("dotenv").config();
const Discord = require("discord.js");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("!help", { type: "LISTENING" });
});

client.on("message", async (msg) => {
  const message = msg.content.toLowerCase();

  if (message.startsWith("!pizza")) {
    msg.react("🍕");
  }
});

client.login(process.env.DISCORD_TOKEN);
