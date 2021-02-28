const Discord = require("discord.js");
const Queue = require("../util/queue");

let queue = new Queue();

exports.createQueue = async (msg, content) => {
  queue.clear();
  msg.channel.send("Queue called " + content + " made.");
};

exports.deleteQueue = async (msg, content) => {
  queue.clear();
  msg.channel.send("Queue called " + content + " deleted.");
};

exports.addToQueue = async (msg, content) => {
  if (queue.enqueue(msg.author.tag)) {
    msg.channel.send(
      msg.author.toString() + " has been added to the queue " + content
    );
    msg.author.send(
      "You have been added to the queue " +
        content +
        ". You are at position " +
        queue.length()
    );
  } else msg.channel.send("You are already in the queue " + content);
};

exports.sendPosition = async (msg, content) => {
  const index = queue.find(msg.author.tag);
  if (index === -1) msg.channel.send("You are not in the queue " + content);
  else
    msg.author.send(
      "You are at position " +
        (queue.find(msg.author.tag) + 1) +
        " in the queue " +
        content
    );
};

exports.remFromQueue = async (msg, content) => {
  if (queue.remove(msg.author.tag))
    msg.author.send("You have been removed from the queue " + content);
  else msg.author.send("Not able to find you in the queue " + content);
};

exports.processQueue = async (msg, content) => {
  queue.dequeue();
  if (queue.length() === 0) {
    msg.channel.send("The queue " + content + " is now empty.");
  } else {
    const user = msg.client.users.cache.find(
      (user) => user.tag === queue.peek()
    );
    user.send("You are now at the top of the queue " + content);
    msg.channel.send(
      "The next person for " + content + " is: " + user.toString()
    );
  }
};

exports.printQueue = async (msg, content) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("List of " + content + " Users:")
    .setColor(0x2b85d3)
    .setDescription(queue.print());
  msg.author.send(embed);
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
