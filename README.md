![WBS Coding School](https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:auto/h:auto/q:90/https://www.wbscodingschool.com/files/WBS_CODING_SCHOOL_logo.svg)

# Install

- Fork project
- Clone your fork:

```bash
git clone <link-to-project>
cd <project-directory>/
npm install
```

# Environment

Create a .env file with a MONGO_URI variable, it has to be a valid MongoDB connection string.

# Commands

## Dev

Dev commands runs app with nodemon

```bash
npm run dev
```

## Start

Start commands runs app with Node

```bash
npm start
```

# API routes and methods

- GET /posts [x]

-- Sample response:

```json
[
  {
    "_id": "60658f545de4930ce04a47ca",
    "title": "This is the new title...again",
    "author": "Jorge Alberto Serrano Paul",
    "body": "Toffee biscuit dragée jelly beans croissant tiramisu. Tiramisu gummi bears gummi bears pastry gummies cake. Carrot cake wafer dragée liquorice jelly sesame snaps. Halvah cheesecake powder tart sweet roll cotton candy bonbon. Lemon drops tootsie roll candy canes candy oat cake. Topping macaroon donut dessert cupcake. Muffin muffin dragée cheesecake jujubes marshmallow. Chocolate cake chocolate marzipan. Gummies tootsie roll jelly beans oat cake. Sesame snaps chocolate lollipop apple pie gummies tiramisu sugar plum. Candy jelly beans macaroon. Cake chocolate croissant icing lemon drops jelly fruitcake pie. Caramels croissant tiramisu gingerbread jujubes. Tiramisu candy halvah jelly-o dessert pie croissant topping gummies.",
    "genre": "sports",
    "date": "2021-04-01T09:16:04.260Z",
    "__v": 0
  }
]
```

- GET /post/:id [x]

-- Sample response:

```json
{
  "_id": "60658f545de4930ce04a47ca",
  "title": "This is the new title...again",
  "author": "Jorge Alberto Serrano Paul",
  "body": "Toffee biscuit dragée jelly beans croissant tiramisu. Tiramisu gummi bears gummi bears pastry gummies cake. Carrot cake wafer dragée liquorice jelly sesame snaps. Halvah cheesecake powder tart sweet roll cotton candy bonbon. Lemon drops tootsie roll candy canes candy oat cake. Topping macaroon donut dessert cupcake. Muffin muffin dragée cheesecake jujubes marshmallow. Chocolate cake chocolate marzipan. Gummies tootsie roll jelly beans oat cake. Sesame snaps chocolate lollipop apple pie gummies tiramisu sugar plum. Candy jelly beans macaroon. Cake chocolate croissant icing lemon drops jelly fruitcake pie. Caramels croissant tiramisu gingerbread jujubes. Tiramisu candy halvah jelly-o dessert pie croissant topping gummies.",
  "genre": "sports",
  "date": "2021-04-01T09:16:04.260Z",
  "__v": 0
}
```

- POST /posts [x]

-- Sample request:

```json
{
  "title": "This is the new title...again",
  "author": "Jorge Alberto Serrano Paul",
  "genre": "sports",
  "body": "Toffee biscuit dragée jelly beans croissant tiramisu. Tiramisu gummi bears gummi bears pastry gummies cake. Carrot cake wafer dragée liquorice jelly sesame snaps. Halvah cheesecake powder tart sweet roll cotton candy bonbon. Lemon drops tootsie roll candy canes candy oat cake. Topping macaroon donut dessert cupcake. Muffin muffin dragée cheesecake jujubes marshmallow. Chocolate cake chocolate marzipan. Gummies tootsie roll jelly beans oat cake. Sesame snaps chocolate lollipop apple pie gummies tiramisu sugar plum. Candy jelly beans macaroon. Cake chocolate croissant icing lemon drops jelly fruitcake pie. Caramels croissant tiramisu gingerbread jujubes. Tiramisu candy halvah jelly-o dessert pie croissant topping gummies."
}
```

-- Sample response:

```json
{
  "_id": "606593732436650d9ae4b5db",
  "title": "This is the new title...again",
  "author": "Jorge Alberto Serrano Paul",
  "body": "Toffee biscuit dragée jelly beans croissant tiramisu. Tiramisu gummi bears gummi bears pastry gummies cake. Carrot cake wafer dragée liquorice jelly sesame snaps. Halvah cheesecake powder tart sweet roll cotton candy bonbon. Lemon drops tootsie roll candy canes candy oat cake. Topping macaroon donut dessert cupcake. Muffin muffin dragée cheesecake jujubes marshmallow. Chocolate cake chocolate marzipan. Gummies tootsie roll jelly beans oat cake. Sesame snaps chocolate lollipop apple pie gummies tiramisu sugar plum. Candy jelly beans macaroon. Cake chocolate croissant icing lemon drops jelly fruitcake pie. Caramels croissant tiramisu gingerbread jujubes. Tiramisu candy halvah jelly-o dessert pie croissant topping gummies.",
  "genre": "sports",
  "date": "2021-04-01T09:33:39.893Z",
  "__v": 0
}
```

- PUT /posts/:id [x]

-- Sample request:

```json
{
  "title": "This is the new title...again",
  "author": "Jorge Alberto Serrano Paul",
  "genre": "sports",
  "body": "Toffee biscuit dragée jelly beans croissant tiramisu. Tiramisu gummi bears gummi bears pastry gummies cake. Carrot cake wafer dragée liquorice jelly sesame snaps. Halvah cheesecake powder tart sweet roll cotton candy bonbon. Lemon drops tootsie roll candy canes candy oat cake. Topping macaroon donut dessert cupcake. Muffin muffin dragée cheesecake jujubes marshmallow. Chocolate cake chocolate marzipan. Gummies tootsie roll jelly beans oat cake. Sesame snaps chocolate lollipop apple pie gummies tiramisu sugar plum. Candy jelly beans macaroon. Cake chocolate croissant icing lemon drops jelly fruitcake pie. Caramels croissant tiramisu gingerbread jujubes. Tiramisu candy halvah jelly-o dessert pie croissant topping gummies."
}
```

-- Sample response:

```json
{
  "_id": "606593732436650d9ae4b5db",
  "title": "This is the new title...again",
  "author": "Jorge Alberto Serrano Paul",
  "body": "Toffee biscuit dragée jelly beans croissant tiramisu. Tiramisu gummi bears gummi bears pastry gummies cake. Carrot cake wafer dragée liquorice jelly sesame snaps. Halvah cheesecake powder tart sweet roll cotton candy bonbon. Lemon drops tootsie roll candy canes candy oat cake. Topping macaroon donut dessert cupcake. Muffin muffin dragée cheesecake jujubes marshmallow. Chocolate cake chocolate marzipan. Gummies tootsie roll jelly beans oat cake. Sesame snaps chocolate lollipop apple pie gummies tiramisu sugar plum. Candy jelly beans macaroon. Cake chocolate croissant icing lemon drops jelly fruitcake pie. Caramels croissant tiramisu gingerbread jujubes. Tiramisu candy halvah jelly-o dessert pie croissant topping gummies.",
  "genre": "sports",
  "date": "2021-04-01T09:33:39.893Z",
  "__v": 0
}
```

- DELETE /posts/:id [x]

-- Sample response:

```json
{
  "success": "Post with id of 606593732436650d9ae4b5db was deleted"
}
```
