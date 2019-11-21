let nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'carefreeav09@gmail.com',
        pass: 'facelessvoid'
    }
});

const fetchAllInventoryInformation = (req, res) => {
    let mailOptions = {
        from: 'carefreeav09@gmail.com',
        to: 'carefreeav09@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


module.exports = {
    fetchAllInventoryInformation
};

