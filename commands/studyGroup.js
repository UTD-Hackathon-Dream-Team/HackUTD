const Discord = require("discord.js");

// !studyGroup private [name] [@users]
// !studyGroup public [name]

exports.studyGroup = async (msg, content) => {
  msg.react("🤓");
  if (content.startsWith("public")) {
    //do public stuff
    console.log(content.substring(content.indexOf(" ") + 1));
  }
  if (content.startsWith("private")) {
    //do private stuff
    console.log(content.substring(content.indexOf(" ") + 1));
  }
};
