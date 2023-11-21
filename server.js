const express = require('express');
const app = express();

// Define endpoint for supplements request
app.get('/logs', (req, res) => {
  // Retrieve data on 5 exercise supplements
  const logs = getLog();
  // Return supplements data as response
  res.json(logs);
});

// Function to retrieve data on 5 exercise supplements
function getLog() {
  // Connect to database or external API to retrieve supplement data
  // Query database or API to retrieve data on 5 supplements
  const logData = [
    { name: 'Log #1', description: 'I love running and I ran for a long period of time. I also took creatine and ate a well balanced diet with chicken, rice and greens' },
    { name: 'Log #2', description: 'Today is the day I finally go to the gym and stop eating junk food. I workout for 2 hours doing back' },
    { name: 'Log #3', description: 'Today is my rest day and I was just focusing on resting and recovering and eating throught out the day' },
  ];
  return logData;
}

// Start the server
app.listen(3010, () => console.log('Server listening on port 3010'));
