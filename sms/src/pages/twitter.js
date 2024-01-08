import React from 'react';

function ScheduleTweet() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // You can handle form submission logic here
    // For example, send formData to an API endpoint
    console.log(formData);
  };

  return (
    <div>
      <h1>Schedule a Tweet</h1>
      <form action="/scheduleTweet" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="tweetText">Tweet Text:</label><br />
        <textarea id="tweetText" name="tweetText" rows="4" cols="50" required /><br /><br />

        <label htmlFor="scheduledTime">Scheduled Time:</label><br />
        <input type="datetime-local" id="scheduledTime" name="scheduledTime" required /><br /><br />

        <label htmlFor="media">Upload Media (Optional):</label><br />
        <input type="file" id="media" name="media" /><br /><br />

        <input type="submit" value="Schedule Tweet" />
      </form>
    </div>
  );
}

export default ScheduleTweet;
