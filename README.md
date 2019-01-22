# Star Wars Character Search

This is [React](https://reactjs.org/) based site 
* It fetches characters from [Star Wars API](https://swapi.co/)
* Lists Characters
* Provides a search box to find a character
* Displays further information about selected character

### Site is hosted [here](https://starwarsapisearch.netlify.com/)

## Fetching multi-page API page by page

`https://swapi.co/api/people/` gives a multi page response, next page url is stored in 'next field'

I used the following hacky solution =>

I defined  `data: []` in my constructor, and then :
```
fetchAPI = API => {
    axios
      .get(API)
      .then(res => res.data)
      .then(res => {
        if (res.next) {
          // console.log(res.results)
          this.setState({
            data: this.state.data.concat(res.results)
          });
          this.fetchAPI(res.next);
        } else {
          this.setState({
            data: this.state.data.concat(res.results)
          });
        }
      });
  };
```

used fetch api recursively - each time validating if next fields containes url or is null and calling function repeatedly.




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
