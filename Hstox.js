
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".needs-validation");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for validation
        let missingFields = [];

        // Get all required fields
        let requiredInputs = form.querySelectorAll("input[required], select[required]");

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                missingFields.push(input.placeholder || input.id); // Store missing field names
                input.style.border = "2px solid red"; // Highlight missing fields
            } else {
                input.style.border = ""; // Reset border if filled
            }
        });

        // Show alert with missing fields
        if (missingFields.length > 0) {
            alert("Please fill in the following required fields:\n\n" + missingFields.join("\n"));
        } else {
            form.submit(); // Submit the form if all fields are filled
        }
    });
});




let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
   e.preventDefault();
   // Create a new message element
   let message = document.createElement("p");
   message.textContent = "Booking successful!";
   message.style.color = "black";
   message.style.fontWeight = "bold";
   message.style.textAlign = "center";
   // Append it below the form
   form.appendChild(message);
});

document.addEventListener('DOMContentLoaded', function() {
    const availabilityContainer = document.getElementById('availability');
    const daysInMonth = 28; // Assuming February for simplicity
    let unavailableDays = [5, 12, 19, 26]; // unavailable days for days off.

    function renderAvailability() {
        availabilityContainer.innerHTML = ''; // Clear existing days
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

    renderAvailability();

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