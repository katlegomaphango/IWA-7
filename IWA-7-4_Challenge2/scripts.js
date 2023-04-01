const nickname= "Timmy";
const firstname = "Timothy";
const loggedname = (nickname && `, ${nickname}`) || (firstname && `, ${firstname}`) || ""

console.log(`Good Morning${loggedname}!`)