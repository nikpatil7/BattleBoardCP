import React, { useState } from 'react';
import { X, Clock, Mail, MessageSquare } from 'lucide-react';

const ReminderModal = ({ isOpen, onClose, onSetReminder, contest, user }) => {
  const [method, setMethod] = useState('email');
  const [timeBefore, setTimeBefore] = useState(60);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const reminderOptions = [
    { value: 15, label: '15 minutes before' },
    { value: 30, label: '30 minutes before' },
    { value: 60, label: '1 hour before' },
    { value: 120, label: '2 hours before' },
    { value: 1440, label: '1 day before' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate method selection
    if (method === 'sms' && !user?.phoneNumber) {
      alert('Please add a phone number to your profile to receive SMS reminders.');
      setIsLoading(false);
      return;
    }

    if (method === 'email' && !user?.email) {
      alert('Please add an email to your profile to receive email reminders.');
      setIsLoading(false);
      return;
    }

    try {
      await onSetReminder(contest.id, contest.platform, method, timeBefore, contest.start);
      onClose();
    } catch (error) {
      console.error('Error setting reminder:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-md border border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Set Reminder</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contest Info */}
        <div className="p-6 border-b border-gray-700">
          <h4 className="text-white font-medium mb-2">{contest.event}</h4>
          <p className="text-gray-400 text-sm">
            Platform: {contest.host}
          </p>
          <p className="text-gray-400 text-sm">
            Start Time: {new Date(contest.start).toLocaleString('en-IN', {
              timeZone: 'Asia/Kolkata',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })} IST
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Reminder Method */}
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-3">
              Reminder Method
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="method"
                  value="email"
                  checked={method === 'email'}
                  onChange={(e) => setMethod(e.target.value)}
                  className="mr-3 text-blue-500"
                />
                <Mail size={16} className="mr-2 text-blue-400" />
                <span className="text-gray-300">Email</span>
                {!user?.email && (
                  <span className="ml-2 text-red-400 text-xs">(No email set)</span>
                )}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="method"
                  value="sms"
                  checked={method === 'sms'}
                  onChange={(e) => setMethod(e.target.value)}
                  className="mr-3 text-blue-500"
                />
                <MessageSquare size={16} className="mr-2 text-green-400" />
                <span className="text-gray-300">SMS</span>
                {!user?.phoneNumber && (
                  <span className="ml-2 text-red-400 text-xs">(No phone set)</span>
                )}
              </label>
            </div>
          </div>

          {/* Reminder Timing */}
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-3">
              <Clock size={16} className="inline mr-2" />
              Reminder Timing
            </label>
            <select
              value={timeBefore}
              onChange={(e) => setTimeBefore(Number(e.target.value))}
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {reminderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading || (method === 'email' && !user?.email) || (method === 'sms' && !user?.phoneNumber)}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Setting...' : 'Set Reminder'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReminderModal;