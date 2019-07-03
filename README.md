# Build an Interactive CLI Tool with Node.js

## now-config

A CLI to help generate a now.sh configuration file.

### Usage

```sh
now-config
```

## TODO

* [x] Choose a library to use for user interaction
* [ ] CLI will ask questions:
  * [ ] Check if now.json already exists...
    * Ask if they want to override
  * [ ] What is the name of the project?
    * default to current directory name
  * [ ] What type of project?
    * node-express
    * static
    * react
    * vue
    * static-build
    * lambda
  * [ ] Which file is the entry point?
  * [ ] Would you like to specify an alias?
    * Allow one or more
  * [ ] Would you like to add now-build to your package.json?
    * Only prompt if react / vue or static-build
  * [ ] Would you like to deploy?
