"use strict";
// Requires
const DNode = require("discord-node");
const chalk = require("chalk");
const fs = require("fs");
const packageJSON = require("./package.json");
let config;
const githubAPI = require("github");

if (!fs.existsSync("./data/config.json")) {
    console.log(chalk.yellow("[WARN]: Configuration not Found! Using example configuration\n[WARN]: Please consider renaming ") + chalk.blue("config.example.json") + chalk.yellow(" to ") + chalk.blue("config.json"))
    config = require("./data/config.example.json");
} else {
    console.log(chalk.green("[SUCCESS]: Configuration found! Using configuration"));
    config = require("./data/config.json")
}

// new Statements
const bot = new DNode(config.token);

bot.on("ready", () => {
    console.log(chalk.blue("[BOT]: Bot successfully started!"))
})

bot.on("messageSent", (msg) => {
    if (!msg.guild) return null;
    
    if (config.logging.message == true) {
        console.log(chalk.blue(`[MESSAGE]: ${msg.author.username}#${msg.author.discriminator}: ${msg.content}\n    Channel: ${msg.channel.name} (${msg.channel.id})\n    Guild: ${msg.channel.guild.name} (${msg.channel.guild.id})`))
    } else {}
})

bot.connect();
