const Discord = require("discord.js");

exports.createQueue = async (msg, content) => {
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
