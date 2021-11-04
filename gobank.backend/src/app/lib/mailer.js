import nodemailer from 'nodemailer';
import transport from '../../config/transport';

export default nodemailer.createTransport(transport);
