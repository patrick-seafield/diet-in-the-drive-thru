# diet-in-the-drive-thru

> CS 361 - Group 4 Project: Diet in the Drive Thru

This is based on nuxt-community/express-template.

nuxtjs.org and vuejs.org for documentation. It's not bad as far as js docs go!

## Basics
The pages directory contains the "pages". They automatically get routes generated for them.

The express / database side is located in server/ and server/api.



# Automated documentation (read me!)

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# running on server
$ npm run forever-start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).

## Jenkins Build

Ubuntu 16.04 LTS as base server. Commands for starting up Jenkins and configuring the build:

ports opened:
22 - SSH
3000 - Web Server
8091 - Jenkins

```sh
sudo apt-get install build-essential curl python-software-properties libsqlite3-dev
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs  # install node 8.1 for stability

# download and run jenkins
wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
java -Dhudson.util.ProcessTree.disable=true -jar jenkins.war --httpPort=8091
```

Note: In order for `sqlite3` package to build correclty
