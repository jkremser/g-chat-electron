# gChat-electron
[![Build Status](https://travis-ci.org/Jiri-Kremser/g-chat-electron.svg?branch=master)](https://travis-ci.org/Jiri-Kremser/g-chat-electron)
[![npm version](https://badge.fury.io/js/%40jkremser%2Fg-chat-electron.svg)](https://badge.fury.io/js/%40jkremser%2Fg-chat-electron)



Simple [Electron](http://electron.atom.io) application that works as a desktop client
for chat.google.com.

## Getting started

- Install [Node LTS](https://nodejs.org)
- Clone this repository
- `npm install` to install the application's dependencies
- `npm start`

### Binary and rpm

#### Prerequisities
If you want to generate RPM package, it requires the `rpm-build` package to be installed

```
sudo dnf install rpm-build lsb
```

### Generate binaries

```
npm run binaries
ls dist/gChat-*
```

### Generate RPM

```
npm run binaries
npm run rpm
ls ./dist/installers/
```

