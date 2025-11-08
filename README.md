# poll.blue

poll.blue is a polling app for Bluesky. Posting instructions available on the
landing page: [https://poll.blue](https://poll.blue).

## Running locally

You will need to install deno and postgres to run locally. Create the necessary
tables by running

```
deno task nessie:local migrate
```

Then start the server:

```
deno task start
```

This will watch the project directory and restart as necessary.

## Hosting your own version

You can host your own instance of poll.blue on your own domain. You'll need:

- A server with deno and postgres installed
- A Bluesky account for the bot (create an app password in Settings → App passwords)
- Environment variables configured (see `.env` for the full list)

Key environment variables to set:

```
ENV=prod
HOSTNAME=your-domain.com
LOCALHOST=https://your-domain.com
BSKY_USERNAME=your-bot-account.bsky.social
BSKY_PASSWORD=your-app-password
BSKY_HOST=https://bsky.social
PG_USERNAME=postgres
PG_PASSWORD=your-db-password
PG_DATABASE=postgres
PG_HOST=localhost
```

The bot account will automatically like and repost polls created through your instance, and can be used to monitor notifications and post results.

## Tests

There are a few unit tests, which you can run using:

```
deno test
```

There are also integration tests which run on CI.

```
INTEGRATION_TESTS=true deno test -A --unstable
```
