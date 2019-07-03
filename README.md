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
  * [x] Check if now.json already exists...
    * Ask if they want to override
  * [x] What is the name of the project?
    * [x] default to current directory name
  * [x] What type of project?
    * node-express
    * static
    * react
    * vue
    * static-build
    * lambda
  * [ ] Project specific questions...
  * [ ] Would you like to specify an alias?
    * Allow one or more
  * [ ] Would you like to add now-build to your package.json?
    * Only prompt if react / vue or static-build
  * [ ] Would you like to deploy?
