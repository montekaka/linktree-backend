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

## Solution

# Relationship
1. User has many links, link belongs to user
2. Link has many childLink, childlink belongs to link


## Schema

User
  - id: number
	- email: string
	- password: string
	- name: string
	- createdDate
	- updatedDate	

Link
  - id: number,
	- userId: number
	- title: string (limit 144)
	- url: stirng (validation starts with http:// and https://)
	- type: string (TODO: create a table to store types)	  
	- createdDate
	- updatedDate

ChildList
  - id: number
	- linkId: number
	- title: string	
	- location: string
	- show_time: date_time
	- sold_out: boolean
	- on_sale: boolean	
	- platform_name: string
	- url: string
  - embed_player_url: string
	- createdDate
	- updatedDate	

_May be we make a http request on the backend to make sure the link return 200?_

## Dependences

### Installing the Sequelize CLI

`npm install --save-dev sequelize-cli`

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


