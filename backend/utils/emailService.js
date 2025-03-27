import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendNotification = async (currentCount, maxCapacity) => {
  const percentage = (currentCount / maxCapacity) * 100;
  if (percentage >= 80) {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "⚠️ Capacity Alert!",
      text: `The place is reaching its limit! Current count: ${currentCount} / ${maxCapacity}`,
    });
  }
};
