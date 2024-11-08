// Task 05: Awaiting Parallel Calls

const fetch = require("node-fetch"); // Ensure node-fetch is installed

async function parallelCalls(urls) {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(
      responses.map((response) => response.json())
    );
    console.log("Responses:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Test the function
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];
parallelCalls(urls);
