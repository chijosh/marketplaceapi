# Marketplace API

[![Build Status](https://travis-ci.com/yourusername/marketplace-api.svg?branch=main)](https://travis-ci.com/yourusername/marketplace-api)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
</p>

The Marketplace API is a comprehensive e-commerce API that provides endpoints for user management, product listings, order processing, product categories, and reviews.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [API Documentation](#api-documentation)


## About

The Marketplace API serves as the backend for an e-commerce platform. It allows you to manage users, list and search for products, process orders, organize products into categories, and gather reviews and ratings.

## Features

- User Management: Register, login, and manage user profiles.
- Product Listings: Create, update, and delete product listings.
- Order Processing: Place orders, view order history, and manage orders.
- Product Categories: Organize products into categories for easy navigation.
- Reviews and Ratings: Gather and display product reviews and ratings.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migration

```bash
# initial migration
$ npm run migration:generate -- db/migrations/initial

# run migration
$ npm run migration:run
```

## API Documentation

Explore the API endpoints and their documentation using Swagger:

- **[API Documentation (Swagger)](https://marketplace-api-09mi.onrender.com/api)**

Swagger provides an interactive interface for testing and exploring the API. You can use it to understand the available endpoints, make sample requests, and view responses.

For quick reference, here are some of the key API endpoints:

- **User Registration:** Create a new user account.
- **User Login:** Authenticate and obtain an access token.
- **Product Listings:** View, create, and manage product listings.
- **Order Processing:** Place orders, view order history, and manage orders.
- **Product Categories:** Explore and filter products by category.
- **Reviews and Ratings:** Read and submit product reviews and ratings.

Make sure to refer to the [API Documentation (Swagger)](https://marketplace-api-09mi.onrender.com/api) for detailed information, request examples, and response schemas.

