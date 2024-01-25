require('dotenv').config()
module.exports = {
    token: process.env.BOT_TOKEN,
    amirlinkedinUrl: process.env.LINKEDIN_URL,
    amirgithubUrl: process.env.GITHUB_URL,
    amirtelegramUrl: process.env.TELEGRAM_URL,
}