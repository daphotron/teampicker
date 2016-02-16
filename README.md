# Team Picker Mobile App

## Getting Started from Scratch

```sh
$ brew tap homebrew/versions
$ brew search node
$ brew install node4-lts
$ npm install -g cordova ionic
$ npm install -g ios-sim
$ npm install -g ios-deploy
$ ionic start teampicker blank
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

## Functionality

* Start the app
* Pick number of people 
* Pick number of teams
- Click Start Picking
- Number of backfacing cards match the number of people
- Number of frontfacing card colors match the number of teams
- Selecting a card shows user the color they selected
- Restart

## Bugs

- number of teams should not exceed number of people / 2

