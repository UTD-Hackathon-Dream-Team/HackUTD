const Discord = require("discord.js");
const moment = require("moment");
const fs = require("fs");

// !studyGroup private [name] [@users]
// !studyGroup public [name]

exports.studyGroup = async (msg, content) => {
  msg.react("🤓");
  var permissions = [];

  if (content.startsWith("public")) {
    groupName = content.substring(content.indexOf(" ") + 1);
    console.log(groupName);

    var role = await msg.guild.roles.create({
      data: { name: groupName, mentionable: true },
    });

    permissions = [
      {
        id: msg.guild.id,
        allow: ["VIEW_CHANNEL"],
        type: "role",
      },
    ];
  }

  if (content.startsWith("private")) {
    details = content.substring(content.indexOf(" ") + 1);
    groupName = details.substring(0, details.indexOf(" "));
    console.log(groupName);
    members = details.substring(details.indexOf(" ") + 1);
    members = members.split(" ");
    console.log(members);

    var role = await msg.guild.roles.create({
      data: { name: groupName, mentionable: true },
    });

    members.forEach((memberID) => {
      var member = msg.guild.members.fetch(memberID);
      if (!member) {
        msg.reply(
          `Could not find a member in this server with an id of ${memberID}`
        );
      }
      if (member) {
        member.roles.add(role);
      }
    });

    permissions = [
      {
        id: msg.guild.id,
        deny: ["VIEW_CHANNEL"],
        type: "role",
      },
      {
        id: role.id,
        allow: ["VIEW_CHANNEL"],
        type: "role",
      },
    ];
  }

  var groupCategory = await msg.guild.channels.create(groupName, {
    type: "category",
    permissionOverwrites: permissions,
  });

  var groupChannel = await msg.guild.channels.create(groupName, {
    type: "text",
    parent: groupCategory,
    permissionOverwrites: permissions,
  });

  var groupVoiceChannel = await msg.guild.channels.create(groupName + " VC", {
    type: "voice",
    parent: groupCategory,
    permissionOverwrites: permissions,
  });
};

const handleTime = (timestamp) => {
  return moment(timestamp)
    .format("DD/MM/YYYY - hh:mm:ss a")
    .replace("pm", "PM")
    .replace("am", "AM");
};

exports.fetchMessages = async (msg, client) => {
  client.channels
    .fetch(msg.channel.id)
    .then(async (channel) => {
      const messages = await channel.messages.fetch();

      fs.writeFile("output.txt", "Chat Details \n", (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      for (const message of messages.array().reverse()) {
        const messageDetail = `${handleTime(message.createdTimestamp)} ${
          message.author.username
        }#${message.author.discriminator} : ${message.content}`;

        fs.appendFile("output.txt", messageDetail + "\n", (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      }
    })
    .catch(console.error);

  const attachment = new Discord.MessageAttachment("output.txt");
  msg.author.send("Requested Chat Details", attachment);
};
