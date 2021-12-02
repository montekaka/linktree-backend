const request = require('supertest');
const {app} = require('./app');

describe("POST /v1/users/1/links", () => {
  
  describe("given a type, title, and url", () => {
    test("should save the type, title and url to the database", async () => {
      const response = await request(app).post("/v1/users/1/links").send({
        type: "classic",
        title: "Apple",
        url: "https://www.apple.com"
      })

      const {type, title, url} = response.body
      expect(type).toBe("classic");
      expect(title).toBe("Apple");
      expect(url).toBe("https://www.apple.com");
    })

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
    test("should respond with the status code 500", async () => {
      const response = await request(app).post("/v1/users/1/links").send({
        type: "classic"
      })

      expect(response.statusCode).toBe(500)
    })

    test("should respond with an error array", async () => {
      const response = await request(app).post("/v1/users/1/links").send({
        type: "classic"
      })

      expect(response.body.error).toBeDefined();
      expect(response.body.error.length).toBeGreaterThan(0);
    })
  })  

  describe("given a classic type, but title is longer than 144 characters", () => {
    test("should respond with the status code 500 with an error array", async () => {
      const title = [];
      for(let i = 0; i < 150; i++) {
        title.push("a");
      }

      const response = await request(app).post("/v1/users/1/links").send({
        type: "classic",
        title: title.join(''),
        url: "https://www.apple.com"        
      })

      expect(response.statusCode).toBe(500)
      expect(response.body.error.length).toBeGreaterThan(0);
    })
  })
})

describe("POST /v1/links/2/listItems", () => {
  describe("given title and url", () => {
    test("should save the title and url to the database", async () => {
      const response = await request(app).post("/v1/links/8/listItems").send({
        title: "Pocket Casts",
        url: "https://pca.st/acquired"
      })

      const {title, url} = response.body
      expect(title).toBe("Pocket Casts");
      expect(url).toBe("https://pca.st/acquired");
    })

    test("should respond with a json object contain the list item id ad status code 200", async () => {
      const response = await request(app).post("/v1/links/8/listItems").send({
        title: "Pocket Casts",
        url: "https://pca.st/acquired"
      })

      expect(response.body.id).toBeDefined();
      expect(response.statusCode).toBe(200)
    })  
    
    test("should specify json in the content type header", async () => {
      const response = await request(app).post("/v1/links/8/listItems").send({
        title: "Pocket Casts",
        url: "https://pca.st/acquired"
      })

      expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })      
  })

  describe("given title, but missing url", () => {
    test("should respond with the status code 500", async () => {
      const response = await request(app).post("/v1/links/8/listItems").send({
        title: "Pocket Casts"
      })

      expect(response.statusCode).toBe(500)
    })

    test("should respond with an error array", async () => {
      const response = await request(app).post("/v1/links/8/listItems").send({
        title: "Pocket Casts"
      })

      expect(response.body.error).toBeDefined();
      expect(response.body.error.length).toBeGreaterThan(0);
    })    
  })
})

describe("GET /v1/users/1/links", () => {
  describe("given an exist user id", () => {
    test("should respond with an array of links", async () => {
      const response = await request(app).get("/v1/users/2/links")
      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThanOrEqual(0);
    })  

    test("should respond with status code 200", async () => {
      const response = await request(app).get("/v1/users/2/links")
      expect(response.statusCode).toBe(200)
    })     
    
    test("should specify json in the content type header", async () => {
      const response = await request(app).get("/v1/users/2/links")

      expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })      
   
  })
})