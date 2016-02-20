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
- ~~Start the app~~
- ~~Pick number of people~~
- ~~Pick number of teams~~
- ~~Click Start Picking~~
- Number of backfacing cards match the number of people (off by one bug)
- Number of frontfacing card colors match the number of teams, 10 teams maximum
- ~~Selecting a card shows user the color they selected~~
- Selecting a card shows user the name of color they selected
- Restart from defaults
- Restart remembering previously selected number of people and teams
- Selecting a card again flips the card back over again

## Bugs
- number of teams should not exceed number of people / 2

## Design
- ~~Fit 3 cards per row~~
- ~~Center cards responsively~~
- Improve animations upon selection
- Select color palette for different team colors
