// Test script for debugging phone number issues
// Run with: node test-phone-validation.js

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

// Test cases
const testNumbers = [
  '9876543210',        // 10 digit
  '+919876543210',     // With country code
  '919876543210',      // 12 digit with 91
  '+91 9876 543 210',  // With spaces
  '98765432',          // Invalid - too short
  '+1234567890',       // Non-Indian number
];

console.log('Testing phone number validation and formatting:');
console.log('=' .repeat(50));

testNumbers.forEach(number => {
  const isValid = validatePhoneNumber(number);
  const formatted = formatPhoneNumber(number);
  console.log(`Input: ${number}`);
  console.log(`Valid: ${isValid}`);
  console.log(`Formatted: ${formatted}`);
  console.log('-'.repeat(30));
});