# Web Scraping Api & Client

## Usage
1. Go in the `api` folder, run `npm install` and then `npm run start:dev` to start the api, it will be available on `localhost:5000`
2. Go in the `client` folder, run `npm install` and then `npm run dev` the frontend will be available on `localhost:3000`

---

## Api Docs
* Go on `localhost:5000/api/v1/docs` for the docs of the api routes
* Alternatively send a request to `localhost:5000/api/v1/docs.json` for a json response of all the routes and their documentation

---

## Explanation
* Implemented the proposed features on the back end using the express js framework
* The page content feature will scrape all the specified page content, optionally users can specify what html tags to extract or if they want the complete text on the page
* The sentiment analysis uses a simple implementation where a scoreboard for each sentiment takes in account what words have been used on the webpage then returns a summary
* The word count functionality only counts all the words on a web page
* The frontend was done in NextJS, I did encounter some challanges in the way next uses server side / client side rendering to send content to the browser.