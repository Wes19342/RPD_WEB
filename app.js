// Form submission handler
document.getElementById('applicationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Prepare the payload for Discord
  const payload = {
    content: `**New Feedback Received!**\n\n**Username:** ${name}\n**Favorite HICOM:** ${email}\n**Feedback:**\n${message}`
  };

  // Send data to Discord webhook
  fetch('https://discord.com/api/webhooks/1303177548238426133/fU8vWLE-e5tMzX0BuvduLD_bamZ1bFabETznjgS7KddlQeNYCWU2d3cRoEasWkmZVVOd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('statusMessage').textContent = 'Application submitted successfully!';
      document.getElementById('applicationForm').reset();
    } else {
      throw new Error('Failed to send application.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('statusMessage').textContent = 'Error submitting application. Please try again later.';
  });
});
