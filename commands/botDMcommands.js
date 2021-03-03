const Discord = require("discord.js");
const { GETass } = require("../utils/firebase");
var moment = require("moment");

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
  //console.log(assignments);
  var data = assignments.map((item) => ({
    name: item.title,
    value: [moment(item.date).format("MMMM Do, YYYY"), item.status],
  }));
  //console.log(moment(assignments[0].date.toDate()).format("MMMM Do, YYYY"));
  const embed = new Discord.MessageEmbed()
    .setTitle("Assignment History:")
    .setColor(0x0)
    .setDescription("Here is a history of assignments and their due dates.")
    .addFields(data);

  msg.author.send(embed);
};

exports.getAnon = async (msg, client) => {
  client.channels.cache.get("815644835956523019").send({
    embed: {
      color: 080754,
      title: "Question",
      description: msg.content.slice("!anon".length),
    },
  });
};

exports.getTodo = async (msg) => {
  assignments = await GETass(msg.author.id);

  var data = [];
  var currentTime = new Date();
  assignments.forEach((item) =>
    Date.parse(item.date) >= currentTime && item.status == "not submitted"
      ? data.push(item)
      : console.log()
  );

  var formatData = data.map((item) => ({
    name: item.title,
    value: [moment(item.date).format("MMMM Do, YYYY"), item.status],
  }));

  const embed = new Discord.MessageEmbed()
    .setTitle("Assignments To-Do:")
    .setColor(0x0)
    .setDescription("Here is a list of assigmnents you have to do.")
    .addFields(formatData);

  msg.author.send(embed);
};
