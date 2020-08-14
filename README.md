# lingo

To test single player client, follow install and run serve as below. The server is under construction.

```
cd client
````

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Resources Used

- Scrabble word dictionaries from https://www.wordgamedictionary.com/twl06/download/twl06.txt, split and sorted using https://stackoverflow.com/a/5086405

## Game Features to-do

- Make full game loop (round numbers, score, timer)
- add a bot for fake simulated multiplayer
- Improve graphics/visuals
- input validation

## Developer-focused to-do

- Can auto generated .js files be sent to a different directory to not clutter the src directory?
- consider Redis for high availability if server crashes?
- update gitignore to not include .js and .js.map
- http://buildnewgames.com/optimizing-websockets-bandwidth/
- store game state in database so disconnects are no big deal (consider Firebase)
- improve performance for longer words and large multiplayer sessions
