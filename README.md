# CrochetApp

Small WebApp to store your chrochet collections! Keep track of your skeins, tools, projects, and more.


### API Docs
Documentation can be found [here](https://github.com/klmork/CrochetApp/tree/main/server#api-routes).

### The Stack

MERN stack with TypeScript (MongoDB, Express, React, Node.js).

Images stored in S3.

### Demo

The project is just in the starting phase - set up is almost complete, and then we can start iterating!

Most of the setup steps are complete:
- Set up server
- Set up DB
- Simple endpoint for getting yarn skeins (first collection we will work with)
- Set up S3 bucket for images
- Dislpay skeins in the UI (getting data from server and images from S3 urls)

Remaining setup tasks:
- CI/CD pipeline
- test suite setup

https://github.com/user-attachments/assets/21fdaf0c-8225-4c03-b6bb-5426b17edb79



### Developing

To run the app while in development:

1. Start the server

   ```
   cd server
   npm i
   npm run dev
   ```

   
2. Start the client

   ```
   cd client
   npm i
   npm run dev
   ```

View the page at http://localhost:5173/ (or whatever is displayed in your terminal for the client-side)
