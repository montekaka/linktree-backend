const request = require('supertest');
const {app} = require('./app');

describe("POST /v1/users/1/links", () => {
  
  describe("given a type, title, and url", () => {
    // should save the type, title and url to the database
    test("should respond with a json object contain the link id", async () => {
      const response = await request(app).post("/v1/users/1/links").send({
        type: "classic",
        title: "Apple",
        url: "https://www.apple.com"
      })

      expect(response.body.id).toBeDefined();
    })


    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/v1/users/1/links").send({
        type: "classic",
        title: "Apple",
        url: "https://www.apple.com"
      })

      expect(response.statusCode).toBe(200)
    })
    
    test("should specify json in the content type header", async () => {
      const response = await request(app).post("/v1/users/1/links").send({
        type: "classic",
        title: "Apple",
        url: "https://www.apple.com"
      })

      expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })    
  })

  describe("given a type, but missing title and url", () => {
    // should respond with the status code 500
  })  
})