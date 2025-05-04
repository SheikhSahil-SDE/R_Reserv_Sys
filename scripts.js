document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const train = document.getElementById('train').value;
        const date = document.getElementById('date').value;
        const seats = document.getElementById('seats').value;

        alert(`Reservation Successful!\nName: ${name}\nTrain: ${train}\nDate: ${date}\nSeats: ${seats}`);
    });

    form.addEventListener('submit', function(event) {
        const fromStation = document.getElementById('from-station').value;
        const toStation = document.getElementById('to-station').value;

        if (fromStation === toStation) {
            event.preventDefault();
            alert('From Station and To Station cannot be the same. Please select different stations.');
        }
    });

    function updateLiveTimer() {
        const timerElement = document.getElementById('live-timer');
        const now = new Date();
        const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const timeString = now.toLocaleTimeString('en-US', options);
        timerElement.textContent = `Current IST: ${timeString}`;
    }

    setInterval(updateLiveTimer, 1000);
    updateLiveTimer();
});