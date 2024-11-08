// Task 01: Iterating with Async/Await

async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
    console.log(value);
  }
}

// Test the function
iterateWithAsyncAwait(["First", "Second", "Third"]);
