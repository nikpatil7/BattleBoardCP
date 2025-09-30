const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

/**
 * Formats phone number to international format
 * @param {string} phoneNumber - Phone number to format
 * @returns {string} - Formatted phone number with country code
 */
const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return null;
  
  // Remove any spaces or special characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // If it already starts with country code (91 for India)
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return '+' + cleaned;
  }
  
  // If it's a 10-digit Indian number, add +91
  if (cleaned.length === 10) {
    return '+91' + cleaned;
  }
  
  // If it already has + sign, return as is
  if (phoneNumber.startsWith('+')) {
    return phoneNumber;
  }
  
  // Default: assume Indian number and add +91
  return '+91' + cleaned;
};

/**
 * Sends SMS reminder to user about upcoming contest
 * @param {string} to - Recipient phone number (can be with or without country code)
 * @param {string} contestId - Contest ID
 * @param {string} platform - Contest platform
 * @param {Date} contestTime - Contest start time
 * @returns {Object} - Twilio message object or error
 */
const sendSMSReminder = async (to, contestId, platform, contestTime) => {
  try {
    // Format the contest time for better readability
    const formattedTime = new Date(contestTime).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Create a concise but informative SMS message
    const messageBody = `🚨 BattleBoardCP Reminder!
${platform} Contest (ID: ${contestId}) starts at ${formattedTime} IST.
Good luck! 🍀`;

    // Format phone number to international format
    const formattedPhone = formatPhoneNumber(to);
    
    if (!formattedPhone) {
      throw new Error('Invalid phone number format');
    }

    const message = await client.messages.create({
      body: messageBody,
      from: twilioNumber,
      to: formattedPhone,
    });

    console.log(`📱 SMS sent successfully to ${formattedPhone} for contest ${contestId}`);
    console.log(`📱 Message SID: ${message.sid}`);
    return { success: true, messageId: message.sid };
  } catch (error) {
    console.error(`❌ Error sending SMS to ${to}:`, error.message);
    return { success: false, error: error.message };
  }
};

/**
 * Validates phone number format
 * @param {string} phoneNumber - Phone number to validate
 * @returns {boolean} - True if valid format
 */
const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return false;
  
  // Remove any spaces or special characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Check for valid formats:
  // 1. 10 digits (Indian mobile)
  // 2. 12 digits starting with 91 (Indian with country code)
  // 3. Phone number starting with + sign
  return cleaned.length === 10 || 
         (cleaned.length === 12 && cleaned.startsWith('91')) ||
         phoneNumber.startsWith('+');
};

module.exports = { sendSMSReminder, validatePhoneNumber, formatPhoneNumber };
