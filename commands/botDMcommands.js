const Discord = require("discord.js");
const fakeData = [
    {
        name: "Assignment 1",
        value: "11/25/21"
    },
    {
        name: "Assignment 2",
        value: "12/24/21"
    },
    {
        name: "Assignment 3",
        value: "10/20/21"
    },
];

const stringData = fakeData.map(info => `${info.name} ${info.date}`)

exports.getHistory = async (msg) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Assignment History:")
    .setColor(0xffffff)
    .addFields(fakeData);

    msg.author.send(embed);
};

exports.getTodo = async (msg) => {
  msg.author.send("poggers");
};
