const Discord = require("discord.js");
const fakeData = [
    {
        name: "Assignment 1"
    },
    {
        name: "Assignment 2"
    },
    {
        name: "Assignment 3"
    },
];

exports.getHistory = async (msg) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Assignment History:")
    .setColor(0x2b85d3)
    .setDescription(fakeData);
  msg.author.send(embed);
};

exports.getTodo = async (msg) => {
  msg.author.send("poggers");
};
