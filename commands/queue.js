const Discord = require("discord.js");
const queue = require("../util/queue");

//let queue = new Queue();

exports.createQueue = async (msg, content) => {
  queue.constructor();
  //queue.clear();
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
  msg.channel.send("ur here: " + queue.find(content));
  msg.react("👍");
};

exports.remFromQueue = async (msg, content) => {
  queue.remove(content);
  msg.react("👍");
};

exports.processQueue = async (msg, content) => {
  queue.dequeue();
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
