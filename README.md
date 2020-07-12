## Description

This is a personal project which works as proof of concept of 
a flexible, custom and scalable architecture to the 
process of sending custom emails to your end users.

The project is a monorepo with two different services:
- **templates:** CRUD-like API to manage _components_ and _templates_ 
- **templates-renderer:** Template rendering service

## Requirements

In order to run the project locally, there are a few requirements:
- docker
- docker-compose

## Test

```bash
# all unit tests
$ npm run test

# `templates-renderer` unit tests
$ npm run test -- templates-renderer

# test coverage
$ npm run test:cov
```

## Running the app

```bash
$ docker-compose up -V
```

## How it works
```js
// TODO
```
