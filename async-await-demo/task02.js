// Task 02: Awaiting a Call

const fetch = require("node-fetch"); // Ensure node-fetch is installed

async function awaitCall() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}

// Test the function
awaitCall();
