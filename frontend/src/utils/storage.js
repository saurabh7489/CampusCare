/**
 * Private Student Storage Utility
 * 
 * Fulfills Section 8 & Section 9:
 * Student history is stored strictly on the student's local device (browser localStorage).
 * This ensures individual check-in logs are never exposed to administrator analytics,
 * preserving total anonymity while enabling private personal reflection.
 */

const STORAGE_KEY = 'campuscare_student_private_history';

/**
 * Retrieve the student's private check-in history from localStorage.
 * @returns {Array<Object>} Sorted array of check-ins (newest first).
 */
export function getPrivateCheckInHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Sort descending by timestamp
    return parsed.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (error) {
    console.warn('Unable to read private student history from localStorage:', error);
    return [];
  }
}

/**
 * Save a new check-in to the student's private device history.
 * @param {Object} checkIn - The check-in details.
 * @returns {Object} The saved record.
 */
export function savePrivateCheckIn(checkIn) {
  try {
    const existing = getPrivateCheckInHistory();
    const newEntry = {
      id: 'chk_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      academicPressure: checkIn.academicPressure || 'Medium',
      assignmentWorkload: checkIn.assignmentWorkload || 'Medium',
      examStress: checkIn.examStress || 'Medium',
      sleepStudyBalance: checkIn.sleepStudyBalance || 'Okay',
      socialPressure: checkIn.socialPressure || 'Low',
      overallFeeling: checkIn.overallFeeling || 'Okay',
      optionalFeedback: checkIn.optionalFeedback ? checkIn.optionalFeedback.trim() : '',
      createdAt: new Date().toISOString(),
    };

    const updated = [newEntry, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newEntry;
  } catch (error) {
    console.error('Failed to save check-in to local private storage:', error);
    return null;
  }
}

/**
 * Clear all private check-in records from the student's browser.
 */
export function clearPrivateCheckInHistory() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear private check-in history:', error);
    return false;
  }
}