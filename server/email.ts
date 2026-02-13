import nodemailer from "nodemailer";
import type { DemoBooking } from "@shared/schema";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export function sendBookingNotificationEmail(booking: DemoBooking): void {
  const notificationEmail = process.env.NOTIFICATION_EMAIL;
  if (!notificationEmail || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("Email not configured — skipping booking notification");
    return;
  }

  const demoDate = new Date(booking.demoDate).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const mailOptions = {
    from: `"SpotWorks" <${process.env.SMTP_USER}>`,
    to: notificationEmail,
    subject: `New Demo Booking: ${booking.name} — ${booking.facilityType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">New Demo Booking Request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: bold; background: #f9f9f9;">Name</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${booking.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: bold; background: #f9f9f9;">Email</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${booking.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: bold; background: #f9f9f9;">Mobile</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${booking.mobile}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: bold; background: #f9f9f9;">Facility Type</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${booking.facilityType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: bold; background: #f9f9f9;">Demo Date</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${demoDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: bold; background: #f9f9f9;">Demo Time</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${booking.demoTime}</td>
          </tr>
        </table>
        <p style="margin-top: 16px; color: #666; font-size: 13px;">
          Booking ID: ${booking.id}<br/>
          Submitted at: ${new Date(booking.createdAt).toLocaleString("en-IN")}
        </p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions).catch((error) => {
    console.error("Failed to send booking notification email:", error instanceof Error ? error.message : String(error));
  });
}
