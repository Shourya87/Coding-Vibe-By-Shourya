const nodeMailer = require('nodemailer');


async function sendEmail(to, subject, text) {

    try{
        const transporter = nodeMailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text 
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
}

async function sendOrderConfirmationEmail(to, name, order) {
  const subject = "Order Created";

  const productList = order.products
    .map(
      (item) =>
        `${item.productId.name} (Qty: ${item.quantity})`
    )
    .join("\n");

  const text = `Hi ${name},
    Thank you for your order!

    Order ID: ${order._id}
    Products:${productList}
    Total Amount: ₹${order.totalAmount}

    We will notify you once your order is shipped.
    Thank you for shopping with us!`;

  await sendEmail(to, subject, text);
}

module.exports = {
  sendEmail,
  sendOrderConfirmationEmail
};