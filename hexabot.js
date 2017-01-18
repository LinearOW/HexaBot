
const Discord = require("discord.js");
const bot = new Discord.Client();
const cmdPrefix = "+";
const Tank = "269673360294805505";
const Support = "269672667471282177";
const Dps = "269673262483505153";
const Fill = "269673500195815424";
const fs = require("fs");
const outputFilename = "./activity.json";
const notes = "./notes.json";
let activity = JSON.parse(fs.readFileSync(outputFilename, 'utf8'));
let note = JSON.parse(fs.readFileSync(notes, 'utf8'));

bot.on("message", msg => {

      if (msg.content.startsWith(cmdPrefix + "help")){
          if(msg.member.roles.has("224921107570884608")) {
            msg.channel.sendMessage("```Available commands: \n+register (tank, support, dps, fill) \n+deregister (tank, support, dps, fill) \n+LF (tank, support, dps) \n+activityAdd \n+activityCheck \n+activityChange \n+activityRemove \n+noteAdd \n+noteCheck```");
            msg.channel.sendMessage("Example of the format for +activityAdd / +activityChange : `+activityAdd 2017-01-16 13:00 to 18:00`");
            msg.channel.sendMessage("Example of the format for +activityCheck : `+activityCheck 2017-01-16`");
            msg.channel.sendMessage("Example of the format for +noteAdd : `+noteAdd We need to tell linear to unbind charge`");
          }
             else {
           msg.channel.sendMessage("```Available commands: \n+register (tank, support, dps, fill) \n+deregister (tank, support, dps, fill) \n+LF (tank, support, dps)```");

        }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (msg.content.startsWith(cmdPrefix + "register" + " " + "tank")){
        if(msg.member.roles.has(Support)) {
          msg.channel.sendMessage("```Please deregister from the support role before adding another role```");
        } else if(msg.member.roles.has(Dps)) {
          msg.channel.sendMessage("```Please deregister from the dps role before adding another role```");
        } else if(msg.member.roles.has(Fill)){
          msg.channel.sendMessage("```Please deregister from the fill role before adding another role```");
        } else {
           msg.member.addRole(Tank).catch(console.error);
           msg.channel.sendMessage(`${msg.author.username} has been registered as a tank player! `);
           msg.delete(4000);
        }
}

        if (msg.content.startsWith(cmdPrefix + "register" + " " + "support")){

          if(msg.member.roles.has(Tank)) {
            msg.channel.sendMessage("```Please deregister from the Tank role before adding another role```");
          } else if(msg.member.roles.has(Dps)) {
            msg.channel.sendMessage("```Please deregister from the dps role before adding another role```");
          } else if(msg.member.roles.has(Fill)){
            msg.channel.sendMessage("```Please deregister from the fill role before adding another role```");
          } else {
             msg.member.addRole(Support).catch(console.error);
             msg.channel.sendMessage(`${msg.author.username} has been registered as a support player!`);
             msg.delete(4000);
          }
        }

          if (msg.content.startsWith(cmdPrefix + "register" + " " + "dps")){
            if(msg.member.roles.has(Support)) {
              msg.channel.sendMessage("```Please deregister from the support role before adding another role```");
            } else if(msg.member.roles.has(Tank)) {
              msg.channel.sendMessage("```Please deregister from the tank role before adding another role```");
            } else if(msg.member.roles.has(Fill)){
              msg.channel.sendMessage("```Please deregister from the fill role before adding another role```");
            } else {
               msg.member.addRole(Dps).catch(console.error);

               msg.channel.sendMessage(`${msg.author.username} has been registered as a a dps player!`);
               msg.delete(4000);
            }
}

            if (msg.content.startsWith(cmdPrefix + "register" + " " + "fill")){
              if(msg.member.roles.has(Support)) {
                msg.channel.sendMessage("```Please deregister from the support role before adding another role```");
              } else if(msg.member.roles.has(Dps)) {
                msg.channel.sendMessage("```Please deregister from the dps role before adding another role```");
              } else if(msg.member.roles.has(Tank)){
                msg.channel.sendMessage("```Please deregister from the tank role before adding another role```");
              } else {
                 msg.member.addRole(Fill).catch(console.error);
                 msg.channel.sendMessage(`${msg.author.username} has been registered as a fill player!`);
                 msg.delete(4000);
              }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(msg.content.startsWith(cmdPrefix + "LF" + " " +"tank")){
        msg.channel.sendMessage("<@&269673360294805505> <@&269673500195815424> players needed for scrim, message <@" + msg.member.id+ ">" );
        }

        if(msg.content.startsWith(cmdPrefix + "LF" + " " + "support")){
        msg.channel.sendMessage("<@&269672667471282177> <@&269673500195815424> players needed for scrim, message <@" + msg.member.id+ ">" );
        }

        if(msg.content.startsWith(cmdPrefix + "LF" + " " + "dps")){
        msg.channel.sendMessage("<@&269673262483505153> <@&269673500195815424> players needed for scrim, message <@" + msg.member.id+ ">" );
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (msg.content.startsWith(cmdPrefix + "deregister" + " " + "tank")){
           msg.member.removeRole(tank).catch(console.error);
           msg.channel.sendMessage(`${msg.author.username} has been deregistered as a tank player`);
           msg.delete(4000);
      }

      if (msg.content.startsWith(cmdPrefix + "deregister" + " " + "support")){
           msg.member.removeRole(support).catch(console.error);
           msg.channel.sendMessage(`${msg.author.username} has been deregistered as a support player`);
           msg.delete(4000);
      }

      if (msg.content.startsWith(cmdPrefix + "deregister" + " " + "dps")){
           msg.member.removeRole(dps).catch(console.error);
           msg.channel.sendMessage(`${msg.author.username} has been deregistered as a dps player`);
           msg.delete(4000);
      }

      if (msg.content.startsWith(cmdPrefix + "deregister" + " " + "fill")){
           msg.member.removeRole(fill).catch(console.error);
           msg.channel.sendMessage(`${msg.author.username} has been deregistered as a as a fill player`);
           msg.delete(4000);
      }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//send DM to user who used command
      if (msg.content.startsWith(cmdPrefix + "message")){
      msg.member.sendMessage("Test");
      }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (msg.content.startsWith(cmdPrefix + "activityAdd")){

      if(msg.member.roles.has("224921107570884608")) {

          var str = msg.content;
          var year = str.substring(13, 17);
          var month = str.substring(18, 20);
          var day = str.substring(21,23);
          var fromHour = str.substring(24,26);
          var fromMinute = str.substring(27,29);
          var toHour = str.substring(33,35);
          var toMinute = str.substring(36,38);
          var memberID = msg.member.id;
          var dayGuard = parseInt(day);
          var monthGuard = parseInt(month);
          var fromHourGuard =  parseInt(fromHour);
          var fromMinuteGuard = parseInt(fromMinute);
          var toHourGuard = parseInt(toHour);
          var toMinuteGuard = parseInt(toMinute);
          var yearGuard = parseInt(year);
          console.log(dayGuard);
          console.log(monthGuard);
          
          if (monthGuard >= 13 || monthGuard <= 0)
          {
            msg.reply("The month you entered is not valid, please enter activity again.");
          }
          else if (dayGuard >= 32 || dayGuard <= 0)
          {
           msg.reply("The day you have entered is not valid, please enter activity again.");
          }
          else if (yearGuard >= 2030 || yearGuard < 2017)
          {
           msg.reply("The year you have entered is not valid, please enter activity again.");
          }
          else if (fromHourGuard >= 25 || fromHourGuard <= 0)
          {
           msg.reply("The time you have entered is not valid, please enter activity again.");
          }
          else if (toHourGuard >= 25 || toHourGuard <= 0)
          {
           msg.reply("The time you have entered is not valid, please enter activity again.");
          }
          else if (fromMinuteGuard >= 61 || fromMinuteGuard < 0)
          {
           msg.reply("The time you have entered is not valid, please enter activity again.");
          }
          else if (toMinuteGuard >= 61 || toMinuteGuard < 0)
          {
           msg.reply("The time you have entered is not valid, please enter activity again.");
         } else {

          var key = year.concat(month,day,memberID);

          if(!activity[key]) activity[key] = {yearS: 0, monthS: 0, dayS: 0, fromMinuteS: 0, fromHourS: 0, toMinuteS: 0, toHourS: 0, idS: 0};

          activity[key].yearS = parseInt(year);
          activity[key].monthS = parseInt(month);
          activity[key].dayS = parseInt(day);
          activity[key].fromMinuteS = parseInt(fromMinute);
          activity[key].fromHourS = parseInt(fromHour);
          activity[key].toMinuteS = parseInt(toMinute);
          activity[key].toHourS = parseInt(toHour);
          activity[key].idS = parseInt(memberID);
          var tempMonth3 = activity[key].monthS;
          if (tempMonth3 >= 1 && tempMonth3 <= 9) {tempMonth3 = `0${activity[key].monthS}`};
          var tempDay3 = activity[key].dayS;
          if (tempDay3 >= 1 && tempDay3 <= 9) {tempDay3 = `0${activity[key].dayS}`};
          var tempFromMinute3 = activity[key].fromMinuteS;
          if (tempFromMinute3 == 0) {tempFromMinute3 = "00"};
          var tempToMinute3 = activity[key].toMinuteS;
          if (tempToMinute3 == 0) {tempToMinute3 = "00"};


          msg.reply(`You have successfully entered the timeslot for the date ${activity[key].yearS}-${tempMonth3}-${tempDay3}, from ${activity[key].fromHourS}:${tempFromMinute3} to ${activity[key].toHourS}:${tempToMinute3}`);

            fs.writeFile(outputFilename, JSON.stringify(activity),  function(err) {
              if(err) {
                console.log(err);
              } else {
                console.log("JSON saved to " + outputFilename);
                console.log(activity);
              }
            });

        }

  } else {
        msg.channel.sendMessage("You do not have access to the team commands.");
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (msg.content.startsWith(cmdPrefix + "activityCheck")){

  if(msg.member.roles.has("224921107570884608")) {

  var str2 = msg.content;
  var year2 = str2.substring(15, 19);
  var month2 = str2.substring(20, 22);
  var day2 = str2.substring(23,25);
  var memberID2 = msg.member.id;
  var linearID = "196706287159869440";
  var shinID = "85344105269313536";
  var nezID = "227148576147505153";
  var mazieID = "219441826116009985";
  var russellID = "153603159720329217";
  var antioID = "206846422253830144";

  var linearKey = year2.concat(month2,day2,linearID);
  var shinKey = year2.concat(month2,day2,shinID);
  var nezKey = year2.concat(month2,day2,nezID);
  var mazieKey = year2.concat(month2,day2,mazieID);
  var russellKey = year2.concat(month2,day2,russellID);
  var antioKey = year2.concat(month2,day2,antioKey);

  var key2 = year2.concat(month2,day2,memberID2);
  if (!activity[key2])
  {
  msg.reply(`There is no data for this date.`);
  } else {
    var tempMonth2 = activity[key2].monthS;
    if (tempMonth2 >= 1 && tempMonth2 <= 9) {tempMonth2 = `0${activity[key2].monthS}`};
    var tempDay2 = activity[key2].dayS;
    if (tempDay2 >= 1 && tempDay2 <= 9) {tempDay2 = `0${activity[key2].dayS}`};
    var tempFromMinute2 = activity[key2].fromMinuteS;
    if (tempFromMinute2 == 0) {tempFromMinute2 = "00"};
    var tempToMinute2 = activity[key2].toMinuteS;
    if (tempToMinute2 == 0) {tempToMinute2 = "00"};

  msg.reply(`Your reported timeslot for the date ${activity[key2].yearS}-${tempMonth2}-${tempDay2} is: ${activity[key2].fromHourS}:${tempFromMinute2} to ${activity[key2].toHourS}:${tempToMinute2}`);

   var linearTimeFrom = (activity[linearKey].fromHourS * 100) + activity[linearKey].fromMinuteS;
   var linearTimeTo = (activity[linearKey].toHourS * 100) + activity[linearKey].toMinuteS;
   var shinTimeFrom = (activity[shinKey].fromHourS * 100) + activity[shinKey].fromMinuteS;
   var shinTimeTo = (activity[shinKey].toHourS * 100) + activity[shinKey].toMinuteS;
   var nezTimeFrom = (activity[nezKey].fromHourS * 100) + activity[nezKey].fromMinuteS;
   var nezTimeTo = (activity[nezKey].toHourS * 100) + activity[nezKey].toMinuteS;
   var mazieTimeFrom = (activity[mazieKey].fromHourS * 100) + activity[mazieKey].fromMinuteS;
   var mazieTTimeTo = (activity[mazieKey].toHourS * 100) + activity[mazieKey].toMinuteS;
   var russellTimeFrom = (activity[russellKey].fromHourS * 100) + activity[russellKey].fromMinuteS;
   var russellTTimeTo = (activity[russellKey].toHourS * 100) + activity[russellKey].toMinuteS;
   var antioTimeFrom = (activity[antioKey].fromHourS * 100) + activity[antioKey].fromMinuteS;
   var antioTTimeTo = (activity[antioKey].toHourS * 100) + activity[antioKey].toMinuteS;

   if ((linearTimeFrom == 0 && linearTimeTo == 0) || (shinTimeFrom ==0 && shinTimeTo == 0) || (nezTimeFrom == 0 && nezTimeTo == 0) || (mazieTimeFrom == 0 && mazieTTimeTo) || (russellTimeFrom == 0 && russellTTimeTo) || (antioTimeFrom == 0 && antioTTimeTo == 0)){

     msg.reply(`Not every member is available for team activities for the date ${activity[key2].yearS}-${tempMonth2}-${tempDay2}, please check if every member filled in their timeslot`);

   } else {

   var from = Math.max(linearTimeFrom, shinTimeFrom, nezTimeFrom, mazieTimeFrom, russellTimeFrom, antioTimeFrom);
   var to = Math.min(linearTimeTo, shinTimeTo, nezTimeTo, mazieTTimeTo, russellTTimeTo, antioTTimeTo);
   var fromS = from.toString();
   var toS = to.toString();

   var finalFromMinute = fromS.substring(2, 4);
   var finalFromHour = fromS.substring(0, 2);
   var finalToMinute = toS.substring(2, 4);
   var finalToHour = toS.substring(0, 2);

   msg.reply(`Optimal team activity time slot for the date ${activity[key2].yearS}-${tempMonth2}-${tempDay2} is from ${finalFromHour}:${finalFromMinute} to ${finalToHour}:${finalToMinute}`);
  }
 }
} else {
    msg.channel.sendMessage("You do not have access to the team commands.");
}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (msg.content.startsWith(cmdPrefix + "activityChange")){

  if(msg.member.roles.has("224921107570884608")) {

  var str3 = msg.content;
  var year3 = str3.substring(16, 20);
  var month3 = str3.substring(21, 23);
  var day3 = str3.substring(24,26);
  var fromHour3 = str3.substring(27,29);
  var fromMinute3 = str3.substring(30,32);
  var toHour3 = str3.substring(36,38);
  var toMinute3 = str3.substring(39,41);
  var memberID3 = msg.member.id;
  var key3 = year3.concat(month3,day3,memberID3);
  var dayGuard2 = parseInt(day3);
  var monthGuard2 = parseInt(month3);
  var fromHourGuard2 =  parseInt(fromHour3);
  var fromMinuteGuard2 = parseInt(fromMinute3);
  var toHourGuard2 = parseInt(toHour3);
  var toMinuteGuard2 = parseInt(toMinute3);
  var yearGuard2 = parseInt(year3);

  if (monthGuard2 >= 13 || monthGuard2 <= 0)
  {
    msg.reply("The month you entered is not valid, please enter activity again.");
  }
  else if (dayGuard2 >= 32 || dayGuard2 <= 0)
  {
   msg.reply("The day you have entered is not valid, please enter activity again.");
  }
  else if (yearGuard2 >= 2030 || yearGuard2 < 2017)
  {
   msg.reply("The year you have entered is not valid, please enter activity again.");
  }
  else if (fromHourGuard2 >= 25 || fromHourGuard2 <= 0)
  {
   msg.reply("The time you have entered is not valid, please enter activity again.");
  }
  else if (toHourGuard2 >= 25 || toHourGuard2 <= 0)
  {
   msg.reply("The time you have entered is not valid, please enter activity again.");
  }
  else if (fromMinuteGuard2 >= 61 || fromMinuteGuard2 < 0)
  {
   msg.reply("The time you have entered is not valid, please enter activity again.");
  }
  else if (toMinuteGuard2 >= 61 || toMinuteGuard2 < 0)
  {
   msg.reply("The time you have entered is not valid, please enter activity again.");
 } else {

  if(!activity[key3]){
    msg.reply("```There is no data for this date, please enter an entry with the command !acitvityAdd```");
  } else {

  var tempYear = activity[key3].yearS;
  var tempMonth = activity[key3].monthS;
  if (tempMonth >= 1 && tempMonth <= 9) {tempMonth = `0${activity[key3].monthS}`};
  var tempDay = activity[key3].dayS;
  if (tempDay >= 1 && tempDay <= 9) {tempDay = `0${activity[key3].dayS}`};
  var tempFromMinute = activity[key3].fromMinuteS;
  if (tempFromMinute == 0) {tempFromMinute = "00"};
  var tempToMinute = activity[key3].toMinuteS;
  if (tempToMinute == 0) {tempToMinute = "00"};
  var tempFromHour = activity[key3].fromHourS;
  var tempToHour = activity[key3].toHourS;

  activity[key3].yearS = parseInt(year3);
  activity[key3].monthS = parseInt(month3);
  activity[key3].dayS = parseInt(day3);
  activity[key3].fromMinuteS = parseInt(fromMinute3);
  activity[key3].fromHourS = parseInt(fromHour3);
  activity[key3].toMinuteS = parseInt(toMinute3);
  activity[key3].toHourS = parseInt(toHour3);
  activity[key3].idS = parseInt(memberID3);

  var minuteCheck1 = activity[key3].fromMinuteS;
  if (minuteCheck1 == 0) {minuteCheck1 ="00"};
  var minuteCheck2 = activity[key3].toMinuteS;
  if (minuteCheck2 == 0) {minuteCheck2 ="00"};

  msg.reply(`Activity timeslot changed for the date ${tempYear}-${tempMonth}-${tempDay} from the timeslot of ${tempFromHour}:${tempFromMinute} to ${tempToHour}:${tempToMinute}, to the timeslot of ${activity[key3].fromHourS}:${minuteCheck1} to ${activity[key3].toHourS}:${minuteCheck2}`);

    fs.writeFile(outputFilename, JSON.stringify(activity),  function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + outputFilename);
        console.log(activity);
      }
    });
}

}
} else {
    msg.channel.sendMessage("You do not have access to the team commands.");
}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (msg.content.startsWith(cmdPrefix + "activityRemove")){

  if(msg.member.roles.has("224921107570884608")) {

  var str4 = msg.content;
  var year4 = str4.substring(16, 20);
  var month4 = str4.substring(21, 23);
  var day4 = str4.substring(24,26);
  var memberID4 = msg.member.id;
  var key4 = year4.concat(month4,day4,memberID4);

  delete activity[key4];

  msg.reply(`Entry for the date ${year4}-${month4}-${day4} deleted.`);

} else {
  msg.channel.sendMessage("You do not have access to the team commands.");
}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (msg.content.startsWith(cmdPrefix +"noteAdd")){
if(msg.member.roles.has("224921107570884608")) {

if(!note[msg.member.id]) note[msg.member.id] = {text: ""};
note[msg.member.id].text = msg.content;

var noteTemp = note[msg.member.id].text.substring(8,1000);
note[msg.member.id].text = noteTemp;

msg.reply(`${msg.author.username} added the note: ${noteTemp}`);

fs.writeFile(notes, JSON.stringify(note),  function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("JSON saved to " + outputFilename);
    console.log(note);
  }
});

} else {
  msg.channel.sendMessage("You do not have access to the team commands.");
}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (msg.content.startsWith(cmdPrefix +"noteCheck")){
if(msg.member.roles.has("224921107570884608")) {
if (!note[85344105269313536]){
msg.member.sendMessage(`Shin does not have a note recorded`);
} else {
msg.member.sendMessage(`Shin's current note: ${note[85344105269313536].text}`);
}
if (!note[196706287159869440]){
msg.member.sendMessage(`Linear does not have a note recorded`);
} else {
msg.member.sendMessage(`Linear's current note: ${note[196706287159869440].text}`);
}
if (!note[227148576147505153]){
msg.member.sendMessage(`Nezhaii does not have a note recorded`);
} else {
msg.member.sendMessage(`Nezhaii's current note: ${note[227148576147505153].text}`);
}
if (!note[219441826116009985]){
msg.member.sendMessage(`Mazie does not have a note recorded`);
} else {
msg.member.sendMessage(`Mazie's current note: ${note[219441826116009985].text}`);
}
if (!note[153603159720329217]){
msg.member.sendMessage(`Rusell does not have a note recorded`);
} else {
msg.member.sendMessage(`Russell's current note: ${note[153603159720329217].text}`);
}
if (!note[206846422253830144]){
msg.member.sendMessage(`Antio does not have a note recorded`);
} else {
msg.member.sendMessage(`Antio's current note: ${note[206846422253830144].text}`);
}
}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});

bot.on('ready', () => {
  console.log('Hexabot successfully started.');
});

bot.login("MjY5NjMwMDc3MTQ5NTExNjgx.C1sIGQ.ttF_qMngwBDjQVrLhyy7cagJn4s");
