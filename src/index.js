const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const nodeExpress = require('./configs/nodeExpress');

const existingConfig = fs.existsSync('now.json');

async function buildConfig() {
  let config = {
    version: 2,
  };

  const answers = await inquirer
    .prompt([
      {
        type: 'text',
        name: 'name',
        message: 'What is the name of the project?',
        default: path.basename(process.cwd()),
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of project?',
        choices: [
          'node-express',
          'static',
          'react',
          'vue',
          'static-build',
          'lambda',
        ],
      },
    ]);
    config.name = answers.name;
    switch(answers.type) {
      case 'node-express':
          config = await nodeExpress(config);
        break;
    }
    console.log(config);
}

if (existingConfig) {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: 'now.json already exists! Would you like to overwrite it?',
        default: false,
      },
    ])
    .then((answers) => {
      if (answers.overwrite) {
        buildConfig();
      } else {
        console.log('Goodbye! 👋');
      }
    });
} else {
  buildConfig();
}
