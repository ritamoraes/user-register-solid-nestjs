import {MailProvider, Message} from "../mail-provider.interface";
import * as nodemailer from 'nodemailer';
import {Injectable} from "@nestjs/common";
import Mail from "nodemailer/lib/mailer";
require('dotenv').config()

@Injectable()
export class MailtrapMailProvider implements MailProvider{

    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: parseInt(process.env.MAILTRAP_PORT),
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD
            }
        })
    }

   async sendMail(message: Message) {
    await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        });
    }

}