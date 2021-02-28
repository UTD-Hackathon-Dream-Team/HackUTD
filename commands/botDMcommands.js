const Discord = require("discord.js");
const { GETass } = require("../utils/firebase");

/* const fakeData = [
    {
        name: "Assignment 1",
        value: ["10/20/21", "submitted"]
    },
    {
        name: "Assignment 2",
        value: ["11/29/21", "not submitted"]
    },
    {
        name: "Assignment 3",
        value: ["12/24/21", "submitted"]
    },
];

const stringData = fakeData.map((info) => `${info.name} ${info.date}`);
 */
exports.getHistory = async (msg) => {
  assignments = await GETass(msg.author.id);
  console.log(assignments);
  const embed = new Discord.MessageEmbed()
    .setTitle("Assignment History:")
    .setColor(0x0)
    .setDescription("Here is a history of assignments and their due dates.")
    //.addFields(fakeData);

  msg.author.send(embed);
};

exports.getTodo = async (msg) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Assignments To-Do:")
    .setColor(0x0)
    .setDescription("Here is a list of assigmnents you have to do.")
    .addFields(fakeData);

  msg.author.send(embed);
};
