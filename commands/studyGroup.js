const Discord = require("discord.js");

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
      var member = msg.guild.members.cache.get(memberID);
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
