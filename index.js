const Discord = require("discord.js-selfbot-v11");
const google = require("googleapis");
const bot = new Discord.Client();
const jimp = require("jimp");
const axios = require("axios"); 
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const pm2 = require("pm2");
require("colors");
const findNumber = require("./findNumber.js");
const findSign = require("./findSign.js");
var messageOked = new Set();
var heartbeatStatus = new Set();
var nameList = [];

const auth = new google.google.auth.GoogleAuth({
    keyFile: "file",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
})

const googleClient = auth.getClient();
const googleSheets = google.google.sheets({ version: "v4", auth: googleClient });

const googleFunction = require("./google/function.js");

bot.login("bot token");

const tokenList = ["token1", "token2", "..."]



function run(myoperation) {
    return new Function('return ' + myoperation + ';').call();
}


tokenList.forEach(token => {
    const client = new Discord.Client();

    client.login(token);

    client.on("ready", async () =>  {
        nameList.push(client.user.username);
        client.guilds.forEach(g => {
            if (g.name === "Pirate Chain") console.log(`${tokenList.indexOf(client.token) + 1} ${client.user.username} | `.green + `I'm connected ! And I am in the guild !`);
        })
        
    });


    client.on('debug', info => {
        if (client.user === null) return;
        if (info.includes("Sending a heartbeat")) {
            if (heartbeatStatus.has(client.user.username)) return;
            else heartbeatStatus.add(client.user.username);
        }
    })




    client.on("message", async msg => {
        if (msg.channel.type === "dm") {
            if (msg.author.id === "500296853552758785") {
                msg.attachments.forEach(async e => {
                    jimp.read(e.proxyURL, (err, image) => {
                        if (err) throw err;
                        let signImg = image.clone();
                        let left = image.clone();
                        left.crop(0, 0, 42, 59)
                        let right = image.clone();
                        right.crop(77, 0, 42, 59)
                        let number1 = findNumber(left);
                        let number2 = findNumber(right);
                        signImg.crop(46, 16, 27, 29)
                        let sign = findSign(signImg);
                        let result = run(`${number1.join("")}${sign[0]}${number2.join("")}`).toString();
                        msg.channel.send(result, {nonce: Math.floor(Math.random() * 100000000)});
                        console.log(`${tokenList.indexOf(client.token) + 1} ${client.user.username} | `.green + `${number1.join("")} ~ ${number2.join("")} => ${sign[0]} => ${number1.join("")}${sign[0]}${number2.join("")} => ${result}`);
                    })
                })
            }
        }
    })
    
    client.on("message", message => {
        if (message.author.id === "500296853552758785") {
            if (message.embeds[0]) {
                if (message.channel.id === "512192228282728449" || message.channel.id === "512192638032674818" || message.channel.id === "874436480943161408") {
                    let desc = message.embeds[0].description;
                    if (desc.includes("has started a react airdrop!")) {
                        let arrrCount = desc.split("to win a share in ")[1].trim().split(" ARRR!")[0];
                        let emojiID = desc.split("React to this message **ONLY** with ")[1].split("within")[0].includes(":") ? desc.split("React to this message **ONLY** with <:")[1].split(">")[0] : desc.split("React to this message **ONLY** with ")[1].split(" within")[0];
                        console.log(`${tokenList.indexOf(client.token) + 1} ${client.user.username} | `.green + desc);
                        setTimeout(function() {
                            message.react(emojiID);
                            console.log(`${tokenList.indexOf(client.token) + 1} ${client.user.username} | `.green + "I reacted with : " + emojiID);
                        }, (Math.floor(Math.random() * 10000) + 5000))
                    }
                }
            }
        } 
    })

    client.on("message", async message => {
        if (messageOked.has(message.id)) return;
        if (message.author.id === "500296853552758785") {
            if (message.embeds[0]) {
                if (message.channel.id === "512192228282728449" || message.channel.id === "512192638032674818" || message.channel.id === "874436480943161408") {
                    let desc = message.embeds[0].description;
                    if (desc.includes("started by") && desc.includes("has finished!")) {
                        messageOked.add(message.id)
                        let arrrCount = desc.split("will share ")[1].trim().split(" ARRR")[0];
                        let arrrCountEach = desc.split(" ARRR (")[1].trim().split(" each)")[0];
                        let data = await CoinGeckoClient.simple.price({
                            ids: "pirate-chain",
                            vs_currencies: "usd"
                            
                        })
                        axios({
                            method: 'post',
                            url: 'https://discord.com/api/webhooks/837730115429204010/3i0ji1UOQ4C3bYjSEvHc8DUX6caAqknxdcfAHdyYC24dtlRUprMcOFTUuZDzS_fKExv_',
                            body: undefined,
                            headers: {
                                "Content-Type": "application/json"
                            },
                            data: {
                                username: "ARRR Reporter",
                                avatar_url: "https://cdn.discordapp.com/icons/512188534111862784/a_9c426338b199d2e58144e332433595d6.webp",
                                content: `${message.guild.id === "512188534111862784" ? "" : `⚠️ From other server (${message.guild.name})`}\nNew reactdrop ended ! We won : **${parseFloat(arrrCountEach) * tokenList.length} ARRR !** (${(parseFloat(arrrCountEach) * tokenList.length) * data.data["pirate-chain"].usd}$) (${arrrCountEach} each)\nThe reactdrop was a share of : **${arrrCount} ARRR**.`

                            }
                        })

                          var date, time, totalARRR, username, userid, totalPart, ourPart, arrrGainE, usdGainE, arrrGainT, usdGainT, dropLink;

                          var today = new Date();
                          var dd = String(today.getDate()).padStart(2, '0');
                          var mm = String(today.getMonth() + 1).padStart(2, '0'); 
                          var yyyy = today.getFullYear();
                          
                          date = mm + '/' + dd + '/' + yyyy;
                          time = String(today.getHours()).padStart(2, "0") + ':' + String(today.getMinutes()).padStart(2, "0") + ':' + String(today.getSeconds()).padStart(2, "0");
                          totalARRR = arrrCount;
                          username = client.users.get(desc.split("started by <@")[1].split(">")[0]).username;
                          userid = desc.split("started by <@")[1].split(">")[0];
                          totalPart = desc.split(" user(s)")[0].split(":money_with_wings: ")[1].trim();
                          ourPart = tokenList.length;
                          arrrGainE = String(parseFloat(arrrCountEach)).replace(",", ".").substring(11, 0);
                          usdGainE = String(parseFloat(arrrCountEach) * data.data["pirate-chain"].usd).replace(",", ".").substring(11, 0);
                          arrrGainT = String(Number(arrrGainE) * Number(ourPart)).replace(",", ".").substring(11, 0);
                          usdGainT = String(Number(usdGainE) * Number(ourPart)).replace(",", ".").substring(11, 0);
                          dropLink = desc.split(" started")[0].split("](")[1].split(")")[0];
                          
                          googleFunction.writeRows(googleSheets, auth, "Gain!A1", [date, time, totalARRR, username, userid, totalPart, ourPart, arrrGainE, usdGainE, arrrGainT, usdGainT, dropLink])
                        
                    }
                }
                if (message.channel.type === "dm") {
                    if (message.embeds[0].description.includes("Your withdrawal request of")) {
                        console.log(`${tokenList.indexOf(client.token) + 1} ${client.user.username} | `.green + message.embeds[0].description.split("Your withdrawal request of **")[1].split(" ARRR")[0] + " ARRR");
                        if (AntoineToken.includes(client.token)) toAntoine = toAntoine + (Number(message.embeds[0].description.split("Your withdrawal request of **")[1].split(" ARRR")[0]) * 0.5);
                        console.log("Pour Antoine : " + toAntoine);
                    }
                    
                }
            }
        } 
    })
})


setInterval(function() {
    let restartEmbed = new Discord.RichEmbed()
    .setTitle("Process restart")
    .setDescription("Les selfs redémarre car au moins 1 d'entre eux et offline.")
    .setColor(0x00FF00)
    .setTimestamp();
    bot.guilds.get("753247287144087744").channels.get("875789851394449408").send(restartEmbed).then(() => {
        pm2.connect((error) => {
            if (error) {
              console.error(error)
              process.exit(2)
            }
            pm2.restart('./tindex.js', (error) => {
                if (error) {
                  console.error(error)
                  process.exit(2)
                }
              })
        })
    })
}, 60000)
