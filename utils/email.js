const sgMail = require('@sendgrid/mail');
require('dotenv').config({ path: './config.env' });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.url = url;
    this.fromEmail = 'arihant.saxena@openplaytech.com';
    this.fromName = 'OpenPlay';
  }

  async sendMagicLink() {
    const mailOptions = {
      to: this.to,
      from: {
        email: this.fromEmail,
        name: this.fromName,
      },
      templateId: 'd-8290d2e0aaf5461aa68c2886a84e22b2',
      dynamic_template_data: {
        url: this.url,
      },
    };

    try {
      await sgMail.send(mailOptions);
    } catch (error) {
      console.log(error);
    }
  }
};


