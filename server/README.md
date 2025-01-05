# Backend of Crochet App

This is our node/express server.

`npm start` to compile and run.

## Development

Checkout package.json for the npm scripts you may want to run.

#### Running the Dev Server

`npm run dev`

#### Linting

`npm run lint`

## API Routes

---
#### GET /api/v1/skeins
Get all skeins

---

#### POST /api/v1/skeins
Create a skein.

Color is the only required field:
```
{
    "color": "blue"
}
```

Sample input with all fields:

```
{
  "color": "Medium Gray",
  "brandColorName": "Gray heather",
  "description": "Fine yarn - good for amigurumi projects.",
  "brand": "Super Saver",
  "dimensions": {
    "weightInOunces": 5,
    "weightInGrams": 141,
    "sizeInYards": 236,
    "sizeInMeteres": 215
  },
  "weight": {
    "weight": 4,
    "description": "medium"
  },
  "material": [
    {
      "material": "acrylic",
      "percent": 100
    }
  ],
  "image": "https://example.com/images/skein-image.jpg"
}
```

---
