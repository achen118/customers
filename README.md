# README

## Ruby version: ruby 2.4.1p111

## System dependencies
* ruby
* bundler (1.16.1)
* node (9.9.0)
* yarn (1.5.1)
* sqlite3

## Setup
* bundle install
* yarn install
* rake db:create

## How to run the test suite
* Controller Tests: rspec ./spec/controllers/*
* JavaScript Tests: yarn test

## Generate data
Rake task to generate users: bundle exec rake customer_setup:add_customers
