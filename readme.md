## UI Automation - Demo Projects

### technology used
- Javascript
- selenium-webdriver
- mocha
- mochawesome, mochawesome-report-generator
- chai

### packages to be installed
- npm install --save selenium-webdriver chromedriver geckodriver mocha mochawesome chai

### package.json configurations

- "scripts": {
  "test": "mocha"
}

### how to add timeout?

- https://mochajs.org/#getting-started

> "test": "mocha -t 10000"

### how to use mochawesome report

> "test": "mocha -t 10000 -reporter mochawesome"


### how to open the url?

- let driver = await new Builder().forBrowser("chrome").build();
- await driver.get("http://google.com");
- driver.close()




## Issues and solutions
- Error: SyntaxError: Cannot use import statement outside a module
- Solution: add "type": "module" in your package.json