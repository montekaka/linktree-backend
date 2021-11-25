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
  {userId: 1, type:"classic", url: "https://www.yahoo.com", title: "Yahoo!", createdAt: new Date(), updatedAt: new Date()},
  {userId: 2, type:"classic", url: "https://www.google.com", title: "Google", createdAt: new Date(), updatedAt: new Date()},
  {userId: 3, type:"classic", url: "https://www.duckduckgo.com", title: "DuckDuckGo", createdAt: new Date(), updatedAt: new Date()},
  {userId: 1, type:"shows_list", url: "https://www.hbo.com/last-week-tonight-with-john-oliver", title: "Tonight with John Oliver", createdAt: new Date(), updatedAt: new Date()},
  {userId: 2, type:"shows_list", url: "https://www.bts.com", title: "BTS Live", createdAt: new Date(), updatedAt: new Date()},
  {userId: 3, type:"shows_list", url: "https://www.kanye.com", title: "Kanye Live", createdAt: new Date(), updatedAt: new Date()},
  {userId: 1, type: "music_player", title: "1989", createdAt: new Date(), updatedAt: new Date()},
  {userId: 2, type: "music_player", title: "Acquired Podcast", createdAt: new Date(), updatedAt: new Date()},
  {userId: 3, type: "music_player", title: "&Twice", createdAt: new Date(), updatedAt: new Date()}
]

const listItems = [
  {linkId: 5, showTime: new Date(), location: "The Forum, Melbourne", soldOut: false, onSale: true, createdAt: new Date(), updatedAt: new Date()},
  {linkId: 5, showTime: new Date(), location: "Venue name, Sydney", soldOut: false, onSale: false, createdAt: new Date(), updatedAt: new Date()},
  {linkId: 5, showTime: new Date(), location: "Venue name, Sydney", soldOut: true, onSale: true, createdAt: new Date(), updatedAt: new Date()},
  {linkId: 8, title: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/acquired/id1050462261", embedPlayerUrl: "https://embed.podcasts.apple.com/us/podcast/acquired/id1050462261", createdAt: new Date(), updatedAt: new Date()},
  {linkId: 8, title: "Spotify", url: "https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp", embedPlayerUrl: "https://open.spotify.com/embed/show/7Fj0XEuUQLUqoMZQdsLXqp", createdAt: new Date(), updatedAt: new Date()},
  {linkId: 8, title: "Google Podcast", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hY3F1aXJlZC5saWJzeW4uY29tL3Jzcw?nord=0", embedPlayerUrl: null, createdAt: new Date(), updatedAt: new Date()},  
  {linkId: 9, title: "Spotify", url: "https://open.spotify.com/album/2MwyDQhotK4B1WcZ5ogrtB", embedPlayerUrl: "https://open.spotify.com/embed/album/2MwyDQhotK4B1WcZ5ogrtB", createdAt: new Date(), updatedAt: new Date()}    
]

module.exports = {
  users,
  links,
  listItems
}