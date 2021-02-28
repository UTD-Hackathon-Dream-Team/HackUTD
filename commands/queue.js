const Discord = require("discord.js");
const Queue = require("../util/queue");

let queue = new Queue();

exports.createQueue = async (msg, content) => {
  queue.clear();
  msg.react("👍");
};

exports.deleteQueue = async (msg, content) => {
  queue.clear();
  msg.react("👍");
};

exports.addToQueue = async (msg, content) => {
  queue.enqueue(content);
  msg.react("👍");
};

exports.sendPosition = async (msg, content) => {
  msg.channel.send("ur here: " + (queue.find(content) + 1));
  msg.react("👍");
};

exports.remFromQueue = async (msg, content) => {
  if (queue.remove(content)) msg.react("👍");
  else msg.channel.send("Not able to find user " + content);
};

exports.processQueue = async (msg, content) => {
  queue.dequeue();
  msg.react("👍");
};

exports.printQueue = async (msg, content) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("List of Users:")
    .setColor(0x2b85d3)
    .setDescription(queue.print());
  msg.channel.send(embed);
  //msg.author.send(embed);
  msg.react("👍");
};

/*
!queue NAME -> creates if not already exists
!queue NAME delete -> deletes
!queue NAME print -> shows users
!queue NAME add -> DMs person order in list
!queue NAME order -> DMs person order in list
!queue NAME remove -> remove user from list
!queue NAME next -> pops and DMs next person
*/
