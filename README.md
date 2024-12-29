# Node.js HTTP Response Header Bug

This repository demonstrates a common error in Node.js HTTP servers: omitting the `Content-Type` header in the response.  This can lead to unexpected behavior on the client-side, such as incorrect character encoding or content negotiation issues. 

## Bug Description

The `bug.js` file showcases a simple HTTP server that sends a response without specifying the `Content-Type` header.  This can cause inconsistencies in how the client interprets the response.

## Solution

The `bugSolution.js` demonstrates the correct way to handle this by explicitly setting the `Content-Type` header in the response, ensuring proper client-side interpretation.  Always set the Content-Type to avoid unexpected results, especially when dealing with different content types like JSON, HTML, etc.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`. 
4. Observe the behavior in your browser's developer tools.  Note the absence or unexpected `Content-Type` header and potential issues.
5. Repeat steps 3 and 4 with `node bugSolution.js`. 
6. Compare the network requests and observe the difference in how the client interprets each response.

## Lessons Learned

Always specify the `Content-Type` header when responding in an HTTP server. This ensures consistent interpretation of the response content by the client and prevents unexpected errors.