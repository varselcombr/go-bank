const Router = require('express').Router();
const authorization = require('../../middleware/authorization')
const Bull = require('../../lib/bull');

Router.post('/v1/mailer/send', authorization, (req, res) => {
    try {
        const { name, from, fromName, to, subject, html } = req.body;
        const mailData = {
            name,
            from,
            fromName,
            to,
            subject,
            html
        }

        Bull.add(mailData);
        return res.status(200).json({state: 'success', data: mailData})
    } catch (error) {

        return res.status(400).json({state: 'failed', error: error})
    }
})

module.exports = Router