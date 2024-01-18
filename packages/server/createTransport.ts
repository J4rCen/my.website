import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'myweb00@mail.ru',
        pass: 'DS6endLbzybFUrxfxCe4'
    }
});

export default transporter