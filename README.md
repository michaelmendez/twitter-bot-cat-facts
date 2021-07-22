# #CatFacts: A Twitter bot

<p align="center">
  <img width="700" height="220" src="https://user-images.githubusercontent.com/43285317/126560694-6afb99cc-c59b-43c0-96cd-f55335784e70.png">
</p>

<h3 align="center">A simple Twitter bot built with <b>Node.js</b> that posts a cat fact every day.</h3>

## Table of Contents

- [Live Demo](#live-demo)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [License](#license)

## Live Demo

Check the [#CatFacts](https://twitter.com/cat_facts_22) Twitter account.

## Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [catfact.ninja API](https://catfact.ninja/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [node-cron](https://www.npmjs.com/package/node-cron)
- [twitter-api-v2](https://www.npmjs.com/package/twitter-api-v2)

## Getting Started

### Prerequisites

1. You need a Twitter Developer account. If you don’t have one already, you can [apply here for access](https://developer.twitter.com/en/apply-for-access).
2. Create a new app from the [developer portal](https://developer.twitter.com/en/portal/dashboard).
3. Go to Settings tab ➞ App permissions section ➞ enable "Read and Write".
4. Go to Keys and Tokens tab ➞ Authentication Tokens section ➞ Access Token and Secret ➞ click on "Generate".
5. Take note of the consumer API key, consumer API secret, access token and access token secret under the "Keys and Tokens" tab.

### Installation

- Rename the environment file from `.env.sample` to `.env`.
- Use the generated keys and tokens to fill the environment variables. See an example below.

  ```CMD
  APP_KEY= # your consumer API key
  APP_SECRET= # your consumer API secret
  ACCESS_TOKEN= # your access token
  ACCESS_SECRET= # your access secret
  PORT=3000
  ```

- Install NPM packages.

  ```CMD
  npm install
  ```

### Usage

To run locally.

```cmd
npm start
```

By default, a new tweet is posted every day at noon but you can change the intervals. For more information, please check the [node-cron package](https://www.npmjs.com/package/node-cron) documentation.

```javaScript
cron.schedule('0 0 12 * * *', async () => {...});
```

## License

Usage is provided under the [MIT License](https://opensource.org/licenses/mit-license.php). See LICENSE for the full details.
