 // Define variables
 let interval;
 let totalSeconds = 0;
 let isRunning = false;
 function setCurrentDate() {
     // Set the date picker value and savedDate to the current date
     let now = new Date();
     let currentDate = now.toISOString().split('T')[0];
     $('#datepicker').val(currentDate);
     savedDate = now;
 }
$(document).ready(function () {
   
    setCurrentDate();

    // Date picker change event
    $('#datepicker').on('change', function() {
        let selectedDate = new Date(this.value);
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Reset time to start of day

        // Check if the selected date is the current date
        if (selectedDate.getTime() === currentDate.getTime()) {
            savedDate = selectedDate;
        } else {
            // If not the current date, set date picker to the current date
            setCurrentDate();
            savedDate = currentDate;
        }
    });

    $('#start').on('click', function() {
        if (!isRunning) {
            isRunning = true;
            startStopwatch();
        }
    });

    $('#stop').on('click', function() {
        if (isRunning) {
            isRunning = false;
            clearInterval(interval);
        }
    });

    $('#reset').on('click', function() {
        isRunning = false;
        clearInterval(interval);
        totalSeconds = 0;
        $('#stopwatch').text('00:00:00');
    });
});

function startStopwatch() {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(async () => {
        try {
            await incrementTime();
        } catch (error) {
            console.error('Error incrementing time:', error);
        }
    }, 1000);
}

function incrementTime() {
    return new Promise((resolve, reject) => {
        totalSeconds++;
        $('#stopwatch').text(formatTime(totalSeconds));
        resolve();
    });
}

function formatTime(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}