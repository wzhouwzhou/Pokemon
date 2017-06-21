
module.exports = async client => {
  client.on("guildMemberAdd"), (member) => {
    const memberG = member.guild;

    const welcomeC = memberG.channels.find("name", "general");
    if(welcomeC) welcomeC.sendMessage(member.toString() + "Welcome!");

    const autoR = memberG.roles.find('name','Member');
    if(autoR) member.addRole(autoR);

    memberG.createRole({
      name: member.user.username,
      color: generateHex(),
      permissions: []
    }).then( (newR) => {
      member.addrole(newR);
    };
  });
};
