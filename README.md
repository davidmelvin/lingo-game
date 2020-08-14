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

## To-do

- Make game loop (round numbers, score, timer)
- improve performance with big words
- improve performances for large multiplayer sessions
- graphics/styling
- input validation
- add a bott for simulated multiplayer
- store game state in database (maybe Firebase to fix disconnects)
- http://buildnewgames.com/optimizing-websockets-bandwidth/
- consider Redis for high availability if server crashes?
- update gitignore to not include .js and .js.map
