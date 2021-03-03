const Discord = require("discord.js");

exports.sendCommands = (msg) => {
  commands = [
    `**!help**: gets list of commands`,
    ` **!studygroup public <group-name>**: creates a public channel and voice channel that any student can view and join`,
    ` **!studygroup private <group-name> <list of students' discord id>**: creates a role for specified students and private text & voice channel for them`,
    ` **!fetch**: Sends a DM of the chat log of the channel the command is given in to the user who requested it`,

    ` **!queue <name>**: creates a queue with the given name if it does not already exist`,
    `**!queue <name>: delete**: deletes the queue with the given name`,
    `**!queue <name>: print**: prints the order of the users in the given queue`,
    `**!queue <name>: add**: adds the user who enters it into the given queue and DMs them a confirmation and their order number`,
    `**!queue <name>: order**: replies in a DM to the person who runs it their order in the given queue`,
    `**!queue <name>: remove**: removes the person who runs it from the given queue`,
    `**!queue <name>: next**: removes the first user on the queue and notifies the next one that they are up`,

    `**!assignment <name>**: creates an assignment, will add to assignments list, create discussion channel, and notify students`,

    `**!history**: (DM to bot) shows a history of the student's assignments that includes the title, due date, and submission status of that assignment`,
    `**!todo**: (DM to bot) shows a list of assignments that the student has left to complete`,
  ];

  msg.channel.send("These are the commands you can use:");
  const embed = new Discord.MessageEmbed()
    .setTitle("Command List")
    .setColor(0x2b85d3)
    .setDescription(commands);
  msg.channel.send(embed);

  //msg.delete({ timeout: 1000 });
};
