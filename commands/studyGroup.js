const Discord = require("discord.js");

// !studyGroup private [name] [@users]
// !studyGroup public [name]

exports.studyGroup = async (msg, content) => {
  msg.react("🤓");
  groupName = content.substring(content.indexOf(" ") + 1);
  var role = await msg.guild.roles.create({
    data: { name: groupName, mentionable: true },
  });
  var permissions = [];
  if (content.startsWith("public")) {
    //do public stuff
    permissions = [
      {
        id: msg.guild.id,
        allow: ["VIEW_CHANNEL"],
        type: "role",
      },
    ];
    console.log("public");
  }
  if (content.startsWith("private")) {
    //do private stuff
    console.log("private");
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
