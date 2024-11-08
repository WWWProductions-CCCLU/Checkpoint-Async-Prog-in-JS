// Task 04: Awaiting Concurrent Requests

const fetch = require("node-fetch"); // Ensure node-fetch is installed

async function concurrentRequests() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
  ];

  try {
    const [response1, response2] = await Promise.all(
      urls.map((url) => fetch(url))
    );
    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log("Combined Results:", { data1, data2 });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Test the function
concurrentRequests();
