// const backdrop = document.getElementById("modal-backdrop");
// const beanCounterModal = document.getElementById("bean-counter-modal");
// const addLogButton = document.getElementById("add-log");
// const xClose = document.getElementById("modal-close");

// // Function to open the modal
// function openModal() {
//     modalBackdrop.classList.remove("hidden");
//     beanCounterModal.classList.remove("hidden");
// }

// // Function to close the modal
// function closeModal() {
//     modalBackdrop.classList.add("hidden");
//     beanCounterModal.classList.add("hidden");
// }

// // Event listener to open the modal when the "Add Log" button is clicked
// addLogButton.addEventListener("click", openModal);

// // Event listener to close the modal when the close button is clicked
// modalCloseButton.addEventListener("click", closeModal);

// backdrop.onclick = function() {
//     modal.style.display = "none";
// }

// buttonCancel.onclick = function(event) {
//     if (event.target == buttonCancel) {
//         modal.style.display = "none";
//         backdrop.style.display = "none";
//         textInput.value = "";
//         photoInput.value = "";
//         priceInput.value = "";
//         cityInput.value = "";
        
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the modal submit button click
    function handleModalSubmit() {
        // Get the values from the input fields
        var logTitle = document.getElementById('name-input').value;
        var notes = document.querySelector('textarea').value;

        // Create a new log entry HTML
        var newLogEntry = document.createElement('div');
        newLogEntry.className = 'post';
        newLogEntry.innerHTML = `
            <div class="post-value">
                <div class="new-log-title">
                    <h3>${logTitle}</h3>
                </div>
                <div class="new-log-notes">
                    <p>${notes}</p>
                </div>
            </div>
        `;

        // Append the new log entry to the posts section
        var postsSection = document.getElementById('posts');
        postsSection.appendChild(newLogEntry);

        // You can also log this information to the console or send it to a server
        console.log('Log Title:', logTitle);
        console.log('Notes:', notes);
    }

    // Add click event listener to the modal submit button
    var modalSubmitButton = document.getElementById('modal-submit');
    modalSubmitButton.addEventListener('click', handleModalSubmit);
});