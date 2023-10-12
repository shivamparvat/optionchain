export function secondsTo12HourTime(seconds) {
  if (typeof seconds !== "number" || seconds < 0 || seconds >= 86400) {
    return "Invalid input"; // Handle invalid input
  }

  const totalMinutes = Math.floor(seconds / 60);
  const hours24 = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const amPm = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 > 12 ? hours24 - 12 : hours24 === 0 ? 12 : hours24;

  const formattedHours = hours12 < 10 ? `0${hours12}` : hours12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${amPm}`;
}
export function convertTimeTo24HourFormat(timeString = 0) {
  if (timeString?.length !== 4) {
    // Check if the input string has the correct format (HHMM)
    return null; // Invalid format
  }
  const hours = parseInt(timeString.substring(0, 2), 10);
  const minutes = parseInt(timeString.substring(2, 4), 10);

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    // Check if hours and minutes are valid
    return null; // Invalid time
  }

  const currentTime = new Date();
  currentTime.setHours(hours);
  currentTime.setMinutes(minutes);
  currentTime.setSeconds(0); // Optional: Set seconds to 0 if not needed

  return currentTime;
}


export function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(":");
    const parsedHours = parseInt(hours, 10);
  
    if (parsedHours >= 0 && parsedHours <= 23) {
      const amPm = parsedHours < 12 ? "AM" : "PM";
      const formattedHours = parsedHours % 12 || 12; // Convert 0 to 12 for noon/midnight
      return `${formattedHours}:${minutes} ${amPm}`;
    } else {
      return "Invalid input"; // Handle invalid input
    }
  }

export function calculateNextUpdateTime(lastUpdate) {
  const nextUpdate = new Date(lastUpdate);
  nextUpdate.setMinutes(nextUpdate.getMinutes() + 5); // Add 5 minutes
  return nextUpdate;
}

// Set a timer to call the function every second to continuously display the next update time
