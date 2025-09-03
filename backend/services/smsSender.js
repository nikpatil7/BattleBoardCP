const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

/**
 * Sends SMS reminder
 * @param {string} to - Recipient phone number
 * @param {string} contestId - Contest ID
 * @param {string} platform - Contest platform
 * @param {Date} contestTime - Contest start time
 */
const sendSMSReminder = async (to, contestId, platform, contestTime) => {
  try {
    const message = await client.messages.create({
      body: `🚨 Reminder: Your ${platform} contest (ID: ${contestId}) starts at ${contestTime}. Get ready!`,
      from: twilioNumber,
      to, // User's phone number
    });

    console.log(`📱 SMS sent successfully to ${to} for contest ${contestId}`);
    return message;
  } catch (error) {
    console.error(`❌ Error sending SMS to ${to}:`, error.message);
  }
};

module.exports = sendSMSReminder;
