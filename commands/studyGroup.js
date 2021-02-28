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
    var permissions = [
      {
        id: role,
        allow: ["VIEW_CHANNEL"],
        type: "role",
      },
    ];
    var projectCategory = await msg.guild.channels.create("test", {
      type: "category",
    });
    // var projectCategory = await msg.guild.channels.create(role, {
    //   type: "category",
    //   permissionOverwrites: permissions,
    // });
  }
};
