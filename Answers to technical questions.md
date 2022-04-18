1. I spent 3.5 hours to build the application.
   a. If I had more time I would add pagination to the ResultsTable.js component, add redux for better state management across the components.
   b. I would add a test that tests all edge cases for the sort function.

2. I have made extensive use of the Spread syntax introduced in Javascript EMCA2018, especially in my Redux reducers. I've included an example from my application below. This allowed for clean immutable code.

export default function (state = { Channels: [], SiteStyle: {} }, action) {
switch (action.type) {
case SET_CHANNELS:
return { ...state, Channels: action.payload };
case SET_SITE_STYLE:
return { ...state, SiteStyle: action.payload };
default:
return state;
}
}

3. My experience with performance optimization has been entirely on the back end node.js server side so far.

4. The API we used was very limitted in terms of what type of queries you can perform because it only allows us to use the URL to pass parameters. I would recommend they create a RESTful API to allow for more flexible GET requests. I would also limit the results to a fixed number to avoid serving such large JSON files by default. For example if I wanted the second 20 results in the query below, I would send the following get request:

axios.get("https://openlibrary.org/api/books", {params: { title: "The Lord of The Rings", limit: 20, offset: 20 }})

5. {
   firstName: "David",
   lastName: "Andrzejewski",
   age: 31,
   status: "Seeking experienced team to join and challenging projects to work on to continue learning and growing as a software developer",
   experience: [
   {
   language: "Javascript",
   years: 2,
   librariesAndFrameworks: [
   "React.js",
   "Node.js",
   "Redux.js",
   "Express.js",
   "bullmq",
   "socket.io",
   "sequelize",
   "redis"
   ],
   language: "Python",
   years: 1,
   librariesAndFrameworks: [
   "Flask",
   ]
   }
   ],
   hobbies: [
   "Mountain Biking",
   "Kite Surfing",
   "Traveling"
   ],
   goals: [
   "To become a master of software development",
   "To be a mentor to new graduates and young professionals",
   "To complete a desert race"
   ],
   countriesVisited: 27
   }
