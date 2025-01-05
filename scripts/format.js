const { readFileSync, readdirSync, writeFileSync } = require("fs");

const statisticsFiles = readdirSync("stats");

statisticsFiles.forEach((file) => {
    const fileName = "stats/" + file
    const content = readFileSync(fileName).toString();

    const json = JSON.parse(content);

    writeFileSync(fileName, JSON.stringify(json, undefined, 4) + "\n");
});

const advancementsFiles = readdirSync("advancements");

advancementsFiles.forEach((file) => {
    const fileName = "advancements/" + file
    const content = readFileSync(fileName).toString();

    const json = JSON.parse(content);

    writeFileSync(fileName, JSON.stringify(json, undefined, 4) + "\n");
});
