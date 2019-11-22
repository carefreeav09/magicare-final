let nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'carefreeav09@gmail.com',
        pass: 'facelessvoid'
    }
});

const sendTestMail = (req, res) => {
    let mailOptions = {
        from: 'carefreeav09@gmail.com',
        to: 'asmitasubedi0346@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'Hi asmi, this is automated message. sent with love.'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};


module.exports = {
    sendTestMail
};

