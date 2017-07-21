# Demo w/ Marvel API

*(This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app))*

This demo app demonstrates a `CharacterSelector` component, that fetches (as required) and displays the characters that are associated with a given comic.

It is set up in the context of a larger page, running in a React/Redux app. For the purposes of demonstration this page (`ComicPage`) only has a dropdown to change between comics. In the interest of time, some valid comics are hard-coded in the `comics.json` file, but the characters for the `CharacterSelector` component are indeed fetched from the Marvel API.

## Set up

### Installation

Run `yarn` or `npm install` to install dependencies.

### Configuration

Add an `.env.local` file in the **root** of the project, as follows:

```
REACT_APP_MARVEL_API_KEY=your_public_api_key_here
```

*(make sure this is the public key, not the private key)*

## Running the app

Run `yarn start` or `npm start`

## Running tests

Run `yarn test` or `npm test`, then press `a` when prompted to run all tests.

Test suite added for this demo: `src/components/CharacterViewer/CharacterSelector/CharacterSelector.spec.js`
