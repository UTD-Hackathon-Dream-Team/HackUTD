const Discord = require("discord.js");
const { POSTass } = require("../utils/firebase");

exports.assignmentCreation = async (msg, content, client) => {
  if (
    // must be professor or TA to use this cmd, must be in correct channel
    (msg.member.roles.cache.has("815462385212194877") ||
      msg.member.roles.cache.has("815510702487240714")) &&
    msg.channel.id === "815564151341711360"
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
          // add to list of assignments channel
          client.channels.cache
            .get("815565009462493224")
            .send({
              embed: {
                color: 080754,
                title: assignmentName,
                description: "Due " + assignmentDate,
              },
            })
            .then((sentEmbed) => {
              sentEmbed.react("✔️");
            });

          // make discussion channel for assignment
          msg.guild.channels.create(assignmentName, {
            type: "text",
            parent: "815523622054658058",
          });
          assignmentUnixTime = Date.parse(assignmentDate);

          msg.guild.members.cache.forEach(async (member) => {
            console.log(member.displayName);
            // if is a student
            if (member.roles.cache.has("815462446939897908")) {
              member;
              console.log("ID", member.id);
              member
                // send them msg abt assignment
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
              students.push(member.id); // save student ids for db
            }
          });
          console.log(students);
          students.forEach(async (student) => {
            console.log("ID before post", student);
            await POSTass(student, assignmentName, assignmentDate);
          });
          msg.react("📘");
        }
      })
      .catch((collected) => {
        msg.channel.send("Error, please try again");
      });
  } else {
    msg.channel.send(
      "Sorry, you don't have permission to do that or are in the wrong channel"
    );
  }
};
