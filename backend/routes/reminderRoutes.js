/**
 * Express router configuration for reminder-related endpoints
 */
const express = require("express");
const {
  addOrUpdateReminder,
  getAllReminders,
  deleteReminder,
} = require("../controllers/reminderController");
const { sendSMSReminder } = require("../services/smsSender");
const authenticate = require("../middleware/authMiddleware");

// Initialize Express router
const router = express.Router();

/**
 * @route   POST /api/reminders/add
 * @desc    Creates a new reminder or updates existing one
 * @access  Private (requires authentication)
 * @param   req.body should contain reminder details
 */
router.post("/add", authenticate, addOrUpdateReminder);

/**
 * @route   DELETE /api/reminders/:contestId
 * @desc    Deletes a specific reminder by contest ID
 * @access  Private (requires authentication)
 * @param   contestId - The ID of the contest to remove reminder for
 */
router.delete("/:contestId", authenticate, deleteReminder);

/**
 * @route   GET /api/reminders
 * @desc    Retrieves all reminders for the authenticated user
 * @access  Private (requires authentication)
 * @returns Array of reminder objects
 */
router.get("/", authenticate, getAllReminders);

/**
 * @route   POST /api/reminders/test-sms
 * @desc    Test SMS functionality
 * @access  Private (requires authentication)
 * @body    { phoneNumber, message }
 */
router.post("/test-sms", authenticate, async (req, res) => {
  try {
    const { phoneNumber, message } = req.body;
    
    if (!phoneNumber) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    const testMessage = message || "🚨 Test SMS from BattleBoardCP! Your SMS reminders are working correctly. 🎯";
    
    const result = await sendSMSReminder(
      phoneNumber,
      "TEST",
      "Test Platform",
      new Date()
    );

    if (result.success) {
      res.status(200).json({ 
        message: "Test SMS sent successfully!", 
        messageId: result.messageId 
      });
    } else {
      res.status(500).json({ 
        error: "Failed to send test SMS", 
        details: result.error 
      });
    }
  } catch (error) {
    console.error("Test SMS error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Export the router
module.exports = router;
