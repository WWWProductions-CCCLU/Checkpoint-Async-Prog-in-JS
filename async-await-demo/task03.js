// Task 03: Handling Errors with Async/Await

const fetch = require("node-fetch"); // Ensure node-fetch is installed

async function awaitCall() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
}

// Test the function
awaitCall();
