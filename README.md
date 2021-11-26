<p align="center">
  <img src="https://github.com/blstrco/linktr.ee-backend-assessment/raw/master/Screen%20Shot%202019-07-08%20at%202.09.47%20pm.png">
</p>

# The Problem
We have three new link types for our users.

1. Classic
	- Titles can be no longer than 144 characters.
	- Some URLs will contain query parameters, some will not.
2. Shows List
	- One show will be sold out.
	- One show is not yet on sale. (draft)
	- The rest of the shows are on sale.
3. Music Player
	- Clients will need to link off to each individual platform.
	- Clients will embed audio players from each individual platform.
	
You are required to create a JSON API that our front end clients will interact with.

- The API can be GraphQL or REST.
- The API can be written in your preferred language.
- The client must be able to create a new link of each type.
- The client must be able to find all links matching a particular userId.
- The client must be able to find links matching a particular userId, sorted by dateCreated.


## Your Solution

- Consider bad input data and the end user of your API - we're looking for good error handling and input validation.
- If you are creating a GraphQL API, think about the access patterns the client may use, and think about the acces patterns the client may not use. Try not to [Yak Shave](https://seths.blog/2005/03/dont_shave_that/)
- Consider extensibility, these are 3 of hundreds of potential link types that we will be developing.


## Rules & Tips

- Choose the language and environment of your choice, just include documentation on how to run your code.
- Immutability and functional programming is looked upon favorably.
- You cannot connect to a real world database - document your schema design.
- Mocking third parties is looked upon favorably.
- @todo comments are encouraged. You aren't expected to complete the challenge, but how you design your solution and your ideas for the future are important.

---
# Submission
Set up your own remote git repository and make commits as you would in your day to day work. Submit a link to your repo when you're finished.

# Solution

## Relationship
1. User has many links, link belongs to user
2. Link has many listItems, listItem belongs to link


## Schema

User

- id: integer
- email: string
- password: string
- name: string
- createdAt
- updatedAt

Link

- id: integer,
- userId: integer
- title: string (limit 144)
- url: stirng (validation starts with http:// and https://)
- type: string (TODO: create a table to store types)	  
- createdAt
- updatedAt

ListItem

- id: integer
- linkId: integer
- title: string	
- location: string
- showTime: date_time
- soldOut: boolean
- onSale: boolean	
- url: string
- embedPlayerUrl: string
- createdAt
- updatedAt


### To-do

1. Make a http request on the backend to make sure the link return status code 200?

2. Add sorting order to both links and listItems to allow user to change the presentation

## Dependences

### Installing the Sequelize CLI

`npm install --save-dev sequelize-cli`

Generate a model

`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

Generate a seed

`npx sequelize-cli seed:generate --name demo-user`

## Install all packages

```
$ npm install
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
```

## To start the server

```
$ npm start
```

## Endpoints

Get all links matching with userId, sorted by dateCreated.

`GET /v1/users/:userId/links`

Respond example:

```
[
  {
    "id": 5,
    "userId": 2,
    "type": "shows_list",
    "title": "BTS Live",
    "url": "https://www.bts.com",
    "createdAt": "2021-11-25T21:41:24.083Z",
    "updatedAt": "2021-11-25T21:41:24.083Z",
    "listItems": [
      {
        "id": 2,
        "linkId": 5,
        "title": null,
        "location": "The Forum, Melbourne",
        "showTime": "2021-11-25T22:05:59.537Z",
        "soldOut": false,
        "onSale": true,
        "url": null,
        "embedPlayerUrl": null,
        "createdAt": "2021-11-25T22:05:59.537Z",
        "updatedAt": "2021-11-25T22:05:59.537Z"
      },
      {
        "id": 3,
        "linkId": 5,
        "title": null,
        "location": "Venue name, Sydney",
        "showTime": "2021-11-25T22:05:59.537Z",
        "soldOut": false,
        "onSale": false,
        "url": null,
        "embedPlayerUrl": null,
        "createdAt": "2021-11-25T22:05:59.537Z",
        "updatedAt": "2021-11-25T22:05:59.537Z"
      }
    ]
  },
  {
    "id": 2,
    "userId": 2,
    "type": "classic",
    "title": "Google",
    "url": "https://www.google.com",
    "createdAt": "2021-11-25T21:41:24.083Z",
    "updatedAt": "2021-11-25T21:41:24.083Z",
    "listItems": []
  }
]
```

Create a new link

`POST /v1/users/:userId/links`

Input data example

```
{
	"type": "classic",
	"url": "abc",
	"title": "1234"
}
```

Respond data example

```
{
  "id": 10,
  "title": "1234",
  "url": "abc",
  "type": "classic",
  "userId": 2,
  "updatedAt": "2021-11-26T01:08:39.646Z",
  "createdAt": "2021-11-26T01:08:39.646Z"
}
```

Error respond example

```
{
  "error": [
    {
      "message": "Classic Link must have a title, and title must not be empty",
      "filed": "classicLinkTitleNotEmpty"
    },
    {
      "message": "Classic Link must have an URL, and URL must not be empty",
      "filed": "classicLinkHasURL"
    }
  ]
}
```

Create a new list item

`POST /v1/links/:linkId/listItems`

Input data example

```
{
	"title": "Podcast Casts",
	"url": "https://pca.st/acquired"
}
```

Respond data example

```
{
  "id": 25,
  "title": "Podcast Casts",
  "url": "https://pca.st/acquired",
  "linkId": 9,
  "updatedAt": "2021-11-26T01:06:56.051Z",
  "createdAt": "2021-11-26T01:06:56.051Z",
  "location": null,
  "showTime": null,
  "soldOut": null,
  "onSale": null,
  "embedPlayerUrl": null
}
```

Error data example

```
{
  "error": [
    {
      "message": "Music Player must have a platform link.",
      "filed": "urlNotEmpty"
    }
  ]
}
```