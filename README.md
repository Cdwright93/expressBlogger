# ExpressBlogger

## Class Notes

- .gitignore is the list of files that will be ignored by git
- We want node_modules to be ignored because of the large folder size
- When we collaborate with other developers, we clone the repository WITHOUT the node_modules installed, and then we run 'npm i' to install the node_modules

- Generators like express-generator will create the boilerplate framework code for us, and then we run 'npm i' to download the list of dependencies.

- The package.json comes with a "scripts" config, in there you can define small blocks of code that can be easily invoked from the command line with 'npm run <scriptName>'

  - _Note_: For the "start" script, you only need to run "npm start"

- When we run 'npm start' and the command "node ./bin/www" is invoked, the ./bin/www file will run our app.js file code, which will eventually include all of the code we will write for Express.

- The 404 status code means that the url/route we requested does not exist or is not congfigured properly in Express

- Every request returns a status code that are grouped into blocks

  - 100 status codes are not used anymore
  - 200 status codes mean success
  - 300 status codes mean partial success
  - 400 status codes mean web errors
  - 500 status codes mean server errors

- In order to get code from one file into another, we need to use the javascript require() statement.
  - import/export
  - _Quick Aside_: Require is being phased out in favor of import/export syntax. HOWEVER, when we are working in an Express environment we need to still use require() because of Node limitations.
  - _Note_: So for Express we need to use require() and module.exports syntax.
  - require() brings in code from the file we specify in the file path
  - module.exports exports code from a file
  - _Note_:
    - module.exports = router; is sending the router variable from the route file
    - var indexRouter = require('./routes/index'); is bringing the router variable into the current file as the variable indexRouter
    - app.use('/', indexRouter); is importing the routes we define on indexRouter into our server so that they are exposed as routes.
      - The first argument is the base path for this router
      - The second argument is the router variable
      - _Important_: All the route paths in our indexRouter are going to be appended to the base path
        - Example:
          - In users.js:
            - router.get('/all', function(req, res, next) {
              res.send('respond with a resource');
              });
          - In app.js:
            - var usersRouter = require('./routes/users');
            - app.use('/users', usersRouter);
          - The '/all' path for the route we created in users.js is going to be APPENDED to the base path in app.js. I.E. the final path will be "localhost:3000/users/all"
