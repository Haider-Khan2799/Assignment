// This is my code for the submission message to also appear 
// below the booking form's submit button after the pop-up alert message has been displayed from the previous code above.
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
   e.preventDefault();
   // This is the code used to create the message that will be displayed after the form has been submitted.
   let message = document.createElement("p");
   message.textContent = "Booking successful!";
   message.style.color = "black";
   message.style.fontWeight = "bold";
   message.style.textAlign = "center";
   // Used to put the message below the submit button on the booking form used for Hstox photography sessions.
   form.appendChild(message);
});

//This is the code used for the calendar to show the availability of the days for booking for photography sessions. with Hstox in the month of February.
document.addEventListener('DOMContentLoaded', function() {
    const availabilityContainer = document.getElementById('availability');
    const daysInMonth = 28; // This was done for the month of February which is the current month for the website to be live.
    let unavailableDays = [5, 12, 19, 26]; // These are the unavailable days for days off for Hstox in the month of February

    function renderAvailability() {
        availabilityContainer.innerHTML = ''; // This is done to cross of the existing days to show that the days are unavailable due to bookings.
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('availability-day');
            dayElement.textContent = day;

            if (unavailableDays.includes(day)) {
                dayElement.classList.add('unavailable');
            } else {
                dayElement.classList.add('available');
            }

            availabilityContainer.appendChild(dayElement);
        }
    }

//The code below is used to handle the next available dates of the booking form and the availability of the days 
// for booking the Hstox photography sessions after the user submits the form.
    renderAvailability(); // This function is called to show the availability of the days for booking the Hstox photography sessions.

    document.querySelector('form').addEventListener('submit', function(event) {
        const selectedDate = new Date(document.getElementById('date').value);
        const selectedDay = selectedDate.getDate();

        if (unavailableDays.includes(selectedDay)) {
            alert('Selected date is not available. Please choose another date.');
            event.preventDefault();
        } else {
            unavailableDays.push(selectedDay);
            renderAvailability();
            alert('Booking successful!');
        }
    });
});