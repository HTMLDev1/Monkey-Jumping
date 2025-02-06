window.onload = function() {
    // Static data (can be dynamically fetched from backend if needed)
    const gameStatus = {
        status: "Disabled",    // Initial status can be set to "Offline"
        players: 0,           // Initial player count
    };

    // Function to update the status on the page
    function updateStatus() {
        document.getElementById('status-text').textContent = gameStatus.status;
        if (gameStatus.status === "Online") {
            document.getElementById('status-text').classList.add("online");
        }

        document.getElementById('player-count').textContent = gameStatus.players;
    }

    // Simulate an API call or dynamic data update
    setTimeout(() => {
        // Example: Change to "Online" after 3 seconds
        gameStatus.status = "Disabled";
        gameStatus.players = 0;  // Example player count
        gameStatus.lastUpdated = new Date().toLocaleString(); // Update time
        updateStatus();  // Update the page with new data
    }, 3000);

    // Initial status update
    updateStatus();
};
