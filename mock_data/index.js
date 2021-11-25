const users = [
  {id: 1, email: "abc@abc.com", name: "abc", createdAt: new Date(), updatedAt: new Date()},
  {id: 2, email: "111@abc.com", name: "111", createdAt: new Date(), updatedAt: new Date()},
  {id: 3, email: "xyz@abc.com", name: "xyz", createdAt: new Date(), updatedAt: new Date()}
]

// - userId: number
// - title: string (limit 144)
// - url: stirng (validation starts with http:// and https://)
// - type: string (TODO: create a table to store types)	

const links = [
  {userId: 1, type:"classic_links", url: "https://www.yahoo.com", title: "Yahoo!", createdAt: new Date(), updatedAt: new Date()},
  {userId: 2, type:"classic_links", url: "https://www.google.com", title: "Google", createdAt: new Date(), updatedAt: new Date()},
  {userId: 3, type:"classic_links", url: "https://www.duckduckgo.com", title: "DuckDuckGo", createdAt: new Date(), updatedAt: new Date()},
  {userId: 1, type:"show_lists", url: "https://www.hbo.com/last-week-tonight-with-john-oliver", title: "Tonight with John Oliver", createdAt: new Date(), updatedAt: new Date()},
  {userId: 2, type:"show_lists", url: "https://www.bts.com", title: "BTS Live", createdAt: new Date(), updatedAt: new Date()},
  {userId: 3, type:"show_lists", url: "https://www.kanye.com", title: "Kanye Live", createdAt: new Date(), updatedAt: new Date()},
  {userId: 1, type: "music_players", title: "1989", createdAt: new Date(), updatedAt: new Date()},
  {userId: 2, type: "music_players", title: "Acquired Podcast", createdAt: new Date(), updatedAt: new Date()},
  {userId: 3, type: "music_players", title: "&Twice", createdAt: new Date(), updatedAt: new Date()}
]

module.exports = {
  users,
  links
}