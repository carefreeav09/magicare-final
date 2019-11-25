const Email = require('email-templates');

const email = new Email({
    message: {
        from: 'carefreeav09@gmail.com'
    },
    send: true,
    preview:false,
    transport: {
        host: 'smtp.mailtrap.io',
        port: 2525,
        ssl: false,
        tls: true,
        auth: {
            user: 'a4058ddcbdea14',
            pass: 'af0dfd0c3f0c47'
        }
    }
});

export default email;