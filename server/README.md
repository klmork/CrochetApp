# Backend of Crochet App

This is our node/express server.

`npm start` to compile and run.

## Development

Checkout package.json for the npm scripts you may want to run.

#### Running the Dev Server

`npm run dev`

#### Linting

`npm run lint`

## Routes
#### GET /api/v1/skeins
Get all skeins

####POST /api/v1/skeins
Create a skein.

Color is the only required field:
```
{
    "color": "blue"
}
```

Sample input with all fields:


