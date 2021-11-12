import mailer from 'nodemailer';
import nodemailer from '../../config/nodemailer';

export default mailer.createTransport(nodemailer);
