const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V25KqOBT9l7xqj9wvVnXVAIKC2o13dGoeAgSMcokQRDzlv0+h3dU9c+ac01M1PKVCsvbae6+98g1kOS7RGDWg/w2QAp8hRe2SNgSBPtCrKEIF6IIQUgj6YDapLTRttmJjp/sRr4RX+WLrg2CSzuVV9hJwemWPY3MQW/UzuHUBqfwEBz8BPHH0IO9O5Dome7tTuZc0tPaSV8pRPa+XF5vl4U4mgp8Ot8/g1iJCXOAsNskepaiAyRg1LsTF1+ifjCoxk201zYSZER5EqTdejCox4nFGE1XQx2kpq5v0mvDl1+j3pqX+mvkbN1wx5OWijTo5p+GhcVja+6kw0qTmLBPNOQ5i+0G/xHGGQjtEGcW0+XLdBQ1xlSaJNZ4fJ7yLqeJcLO20vzrxRcv4+igy60I5LFUv/hpx7rAgwrIy3frE8+FwwhJ0qpaXcrxZNGJtCo5yXWUcIu7gb8Td4l0rx/9Sd9vdxDOuPqswnOtI2/kxVsm+0wxGna1jMaUSZwm3GykM88W6B5qwhuvTQN2Y0m6s79bqkSVNx3NndcfBVXk4bLgskDaH1PygD2lV/IxlQmaO0dtMV1ydzDvyOazcwqn38sl81Q7rccyVku9xl3GILsEZ6vWV3QzwRD9DpyRFx3mxrwKP0Dpfz65rBjPqdr1349nzPaMjauwQ9NlbFxQoxiUtIMV5dt+TuS6A4XmBggLRe3mBfRZPLwNTW4idxo6j11PjHhkmy3rL8HRdLvArYlcv+jIRPeUZdAEp8gCVJQpHuKR50UxRWcIYlaD/x71TbdIFSnOKHByCPlA5nlVlXpEkXvy9/K3eQ1pCQn7LEAVdEBV5OkWgT4sKdcH9gi5qjMWJvGmIBidomqUwusxLIqvKA4aV9DbF9BF0iVNUUpiSNjNelVlB5MVb9//hMdANXRQkTuN5zhAFSZQUQTJZTZVES5At7Zc8/uyCDF3oQ8dt9Xm2CyJclHSVVSTJYfgu8vefMAjyKqOLJguMdoEK0P+0jSjFWVy2mVUZLII9PiOjzQP0I5iU6NYFITrjANl3/vv4XC3D9WzR6LyT2qWjoqe47eA+zx5HGJnhA45HTxwfwSdBCKQnRVKUp9D3fZlnglBUEGjL8bCQ9s4PFc3iPdGwkUKoHvcOM+hV/lJ1m8Y9PGziIUVUoPC9yj4MjhVZ5keU/QRX2s3x1YRrPCZp73V3HDjGdA4t7eRPP+E+JA763z5s28jDFm8tespQNQTQdquN850a+iz/vSAy2J4GI9zGeGtAeztEFOKkBH1gTKt17NiW+XKILjIzHGpmrBmxBj4a9m4Ej0ErZjMvPm+jWTU+zKt455/QmBXTRBT5y9LeeNoK906XeDc83gftnyCgDzKfc7arge0KSqdBuGSsuOiYThSMZ72Gj7KNcaidUvdU016pVXTZeMyGFZRXG28tUi7Pak/VPW3qbXIjZWPN4/2IDurnNtpDOJ+D5dPG0yazUyZn63NvyJ4Php7oknPVX2nieX7EY29TEiIs996Iya+do2Zem5nfqCOXrgb0UkHt2Ju4+kQpditscZ34hLWHRd0tMnl7mvCbeTxkFmF0d/q3BvyyUR+KZ27dTxhvb8cPVKVDxrSECTdiJjhn/Hy4kTJM0Y4gFCqrxkpqyz5L5XY4Jy64taNMEkijvEhBH8AsLHIcgi5IYEm1j6H9Nx/guyBtNEIWFNL3WQda+1mEB7e/ACIGu2QWCQAA',
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





