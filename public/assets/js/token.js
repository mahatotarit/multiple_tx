function displayTime() {
  const now = new Date();
  const timeOptions = {hour: '2-digit',minute: '2-digit',second: '2-digit',hour12: true,};
  const timeString = now.toLocaleTimeString('en-US', timeOptions);

  const timeZoneOptions = { timeZoneName: 'long' };
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', timeZoneOptions);
  const [{ value: timeZoneName }] = dateTimeFormat.formatToParts(now).filter((part) => part.type === 'timeZoneName');

  document.querySelector('#time_zone_time').innerHTML = timeString;
  document.querySelector('#time_zone_name').innerHTML = timeZoneName;
}
setInterval(() => displayTime(), 1000);
displayTime();
