export const calculateTime = (staps = 0) => {
  var initialTime = new Date("2023-09-14T09:15:00");

  var hoursToAdd = parseInt(staps / 60);
  var minutesToAdd = staps % 60;
  // Add the hours and minutes to the initial time
  initialTime.setHours(initialTime.getHours() + hoursToAdd);
  initialTime.setMinutes(initialTime.getMinutes() + minutesToAdd);

  // Format the result as a time string
  var resultTime = initialTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return resultTime;
};

export const calculateTimeForQurey = (step = 0) => {
  const time = calculateTime(step * 5);
  const [timePart, ampm] = time.split(" ");

  // Split the time part into hours and minutes
  const [hours, minutes] = timePart.split(":");

  // Convert hours to a number
  let militaryHours = parseInt(hours, 10);

  // Adjust the hours for PM time (add 12 hours)
  if (ampm === "PM") {
    if (1 <= militaryHours && 3 >= militaryHours) {
      militaryHours += 12;
    }
    // militaryHours += 12;
  }

  // Format the military time as a string with leading zeros for hours and minutes
  const militaryTime = `${militaryHours.toString().padStart(2, "0")}${minutes}`;

  return militaryTime;
};
