const Discord = require("discord.js");

exports.assignmentCreation = async (msg, content, client) => {
  if (
    msg.member.roles.cache.has("815462385212194877") || // must be professor or TA to use this cmd
    msg.member.roles.cache.has("815510702487240714")
  ) {
    msg.guild.members.fetch().catch(console.error);
    let assignmentName = msg.content.slice("!assignment".length);
    msg.channel.send("Enter assignment due date (mm/dd/yyyy)");
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

        students = []; // for db
        if (isNaN(Date.parse(assignmentDate))) {
          msg.channel.send("Invalid date format, please try again");
        } else {
          msg.guild.members.cache.forEach((member) => {
            console.log(member.displayName);
            if (member.roles.cache.has("815462446939897908")) {
              // if is a student
              member;
              member
                .send({
                  // send them msg abt assignment
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
              students.push(member.id); // save student ids for db
            }
          });
          client.channels.cache.get("815504994903392258").send({
            // add to list of assignments channel
            embed: {
              color: 080754,
              title: assignmentName,
              description: "Due " + assignmentDate,
            },
          });
          // make discussion channel for assignment
          msg.guild.channels.create(assignmentName, {
            type: "text",
            parent: "815523622054658058",
          });
          assignmentUnixTime = Date.parse(assignmentDate);
        }
        msg.react("📘");
      })
      .catch((collected) => {
        msg.channel.send("Error, please try again");
      });
  }
};
