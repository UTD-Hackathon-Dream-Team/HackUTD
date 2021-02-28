const Discord = require("discord.js");

exports.assignmentCreation = async (msg, content) => {
  msg.react("📘");
  msg.guild.members.fetch().catch(console.error);
  let assignmentName = msg.content.slice("!assignment".length);

  msg.channel.send("Enter assignment due date");
  const filter = (m) => m.author.id === msg.author.id;
  const collector = msg.channel.createMessageCollector(filter, {
    time: 15000,
  });
  msg.channel
    .awaitMessages(filter, {
      max: 1,
      time: 30000,
      errors: ["time"],
    })
    .then((message) => {
      message = message.first();
      assignmentDate = message.content;

      msg.guild.members.cache.forEach((member) => {
        console.log(member.displayName);
        if (member.roles.cache.has("815462446939897908")) {
          member;
          member
            .send({
              embed: {
                color: 080754,
                title: "**New Assignment Posted:**",
                description: "CS 1337, Professor Smith",
                fields: [
                  {
                    name: assignmentName,
                    value: "Due " + assignmentDate,
                    inline: false,
                  },
                ],
              },
            })
            .catch(console.error);
        }
      });
    })
    .catch((collected) => {
      message.channel.send("Timeout");
    });
};
