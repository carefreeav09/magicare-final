import email from "./mail";

export const sendVehicleMail = (req, res) => {
    email
        .send({
            template: 'vehicles',
            message: {
                to: 'carefreeav09@gmail.com'
            },
        })
        .then()
        .catch(console.error);
};
