function getDayName(dateString) {
  let dayName;
  // Write your code here
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  dayName = new Date(dateString)
  dayName = days[dayName.getDay()]
  return dayName;
}

getDayName("10/11/2009")
getDayName("11/10/2010")
