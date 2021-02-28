const Discord = require("discord.js");

// !studyGroup private [name] [@users]
// !studyGroup public [name]

exports.studyGroup = async (msg, content) => {
  msg.react("🤓");
  if (content.startsWith("public")) {
    //do public stuff
    console.log(content.substring(content.indexOf(" ") + 1));
  }
  if (content.startsWith("private")) {
    //do private stuff
    groupName = content.substring(content.indexOf(" ") + 1);
    var role = await msg.guild.roles.create({
      data: { name: groupName, mentionable: true },
    });
    console.log(role);
    var permissions = [
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
  }
};
