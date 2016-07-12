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
- ~~Number of backfacing cards match the number of people (off by one bug)~~
- ~~Number of frontfacing card colors match the number of teams, 10 teams maximum~~
- ~~Selecting a card shows user the color they selected~~
- ~~Restart remembering previously selected number of people and teams~~
- ~~Selecting a card again flips the card back over again~~
- ~~Number of teams are determined by number of colors defined~~
- ~~Selecting a card shows user the name of color they selected~~
- ~~Visually flip cards over when tapped on~~
- ~~Pick colors for teams at random~~
- Zoom in on card when tapped on with a modal, tap modal to dismiss
- Visually disable increment/decrement buttons when they can't be clicked further
- Show the cards being generated underneath home screen

## Bugs
- ~~Restarting doesn't take you back to the top of the page~~
- Number of teams should not exceed number of people / 2

## Design
- ~~Fit 3 cards per row~~
- ~~Center cards responsively~~
- ~~Improve animations upon selection~~
- Make different aliens per color (need to make 10 diff aliens for the 10 colors)
- Logo, mascot, patterns
