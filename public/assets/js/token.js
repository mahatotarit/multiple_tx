
function updateClock() {
    const now = new Date();
    
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const formattedDate = `${day} : ${month} : ${year}`;
    const formattedTime = `${hours} : ${minutes} : ${seconds}`;

    console.log(now);

    // document.querySelector('#day_month_year_div').innerHTML = formattedDate;
    document.querySelector('#hour_minute_second_div').innerHTML = formattedTime;
    
}

// setInterval(updateClock, 1000);
updateClock();
