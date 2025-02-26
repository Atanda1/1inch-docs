# Farcaster Documentation

Farcaster contracts are deployed on Optimism, an Ethereum layer 2 network. There are three core contracts: Id Registry, Key Registry, and Storage Registry. Write access to the ID and Key registry is gated through the Gateway contracts. There is also a Bundler helper contract to make it easy to register an fid, add a key and rent storage in one transaction.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
# farcaster-docs
