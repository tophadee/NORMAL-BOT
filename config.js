const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61VaY+qSBT9L/VV+8kim0knw94qKoork/lQQoElq1Cg8OJ/n9B2pzt5W08yfKoUVeeee++5p76DNMMlmqIGjL6DvMA1JKhbkiZHYASUKghQAfrAhwSCERjLu5JFyn6oa0PKFXNrcVHHkV01CyeXaFYOQlefVPGmir1ncO+DvDrG2PsN4FabbreH4RJtFQGq0knTEjGWJnEQlcfxPLoom5fJmSdQN+VncO8QIS5wGur5CSWogPEUNTbExdfoXyeI29mHNg3XVk8SlZOhOBdvUUIvUtH4WpHx9WyzKVL34tfo29L2cBZ7+KIw5yUXiG1x2NG6KO1VYermONrrUJq9mApH6w/6JQ5T5I99lBJMmi/XHZn00Q0OiWwuGtucZ/mSGceypNg7d3aDqFmQUwZTeRGYh68RZzy2bXRxUZzDgcY3tGjLCVER3qMFVKDMlPX53Mxsq43Fz8Tt4l0r0X+pezZuJ/tk0R4lTsSq4dayZ+ysgTRokwwf856wQqZprxchG36NfnAKrYkykcoYxhNDnuUaH1zEVjs4rR4dzUmurC9QaZZXdflBH5Kq+B3LtREcasF3Nj69PfMrZzdXI6WYDafbbCOYQlLGSR0R5XoLVCj2pmc0tDU0ldTstNS2ke9K0D3tGxdT6ZRs9w3r7tNIDp9fM4pQM/bBiL73QYFCXJICEpyl3d6Q7wPo1w7yCkReqwvkGbU/7W9Ctr+1crqcVhs5QG6zvsyIpG7aVrgufeqaMYVyeAZ9kBeZh8oS+S+4JFnRzFBZwhCVYPT3a6O6nAuUZARNsA9GQGJYWhJYkedZ7q/y2/UESQnz/FuKCOiDoMiSGQIjUlSoD14v0KLMqDJNq5yuMENJEzWBZliWYjRWU0SR7zJMHkHXOEElgUkORrTASiIlcgx77/8/PDiJkyhelSRGH/KsziqCSimCwum8SvGq8Gce//RBim7kIeOu+CzdBwEuSrJJqzzOoP+u8fef0POyKiVOk3pqt0AFGH3aRoTgNCy7zKoUFt4J10jt8gCjAMYluveBj2rsoQ4PrEJHpqx54JyxOn/yqjSs6oXcdfCUpY8jnhhICMLg6cgF/tOQp7knyPHwSaCHHCdSRw9KHOjK8XCQ7s4vBU0fmpQsBjZ90HZWU0RXYjeDlG2IRb2K8qFEVCD/vcpH6EVVvs4ilP4G12yy83TAr0tBrNmbNN0zyGgHajX2vU+4D4WD0fcP11Yzv8ObWSt9utaHoOtWF+cHNYxo4UdBpLA7DV5wF+OtAd1tHxGI4xKMgDpjtuFkbOh2JbVHyjTlcSirYVfh94a9+8Bj0Irlch/Wh2BZTc+rKnSPFzSluSTmOPa2Hu/28gYPLrfQNSPx+Scg3Qtgt3O6tnunVNoY1nYrzgy0LbhGnlvXjdYzF+3aPp6cQcFS6YmyJHvTm9vT42TgRGFL06ahHQyF3aneRh1v64M5vNhYWz530R7C+RzMUaB723u9ckWcy06qXM5b94LsxfAca0NR1IowxeqGblS7sS+OU6cmYyC/RkXhW9UFJk0sueINb1XiDV7mmb4cBBvl+nCoV4eM314m/GYeD5kFGL0a/VsD/tioD8VT9/4njLen4xeqUiClG0OLeaEsnFHHzNzxKSbIzRHyxU1jxFdjXPPlwVzlNrh3o5zHkARZkYARgKlfZNgHfRDDksgfQ/szH6D6IGnkPHcIJO+zDuTus/EJ3P8F7POoJRUJAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "hadeed ur rehman",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "03197386635",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__hadeed}`);
    delete require.cache[fichier];
    require(fichier);
});





