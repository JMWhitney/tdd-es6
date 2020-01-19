#Integration tests

**Single Service integration tests**
- Test a single piece, or 'service' of your application end to end, and independent from the other pieces.

Ex: full stack application with front-end back-end and database. Test each separately. If we wanted to test the backend of our application we would use a database stand-in and use a testing framework to make calls to the backend, instead of using our front-end logic or ui.

**Boundary integration tests**
- test the communication between pieces of your application.

- It is important not to use test doubles for boundary tests, because we want to observe the way the components of our application actually interact with one another. 

- Boundary tests are going to be slower to execute than single service or unit tests because they involve actual IO operations. And usually some setup as well. But generally this is balanced out by the fact that there are usually fewer boundary tests than single service or unit tests.

#JavaScript testing frameworks.

Integration tests can be performed using the same tools that we used to write our unit tests. That is Mocha to perform our tests and Chai to make testable assertions about our code. We don't need any special test environments to run integration tests. The exception to this is if you actually wanted to render the front-end UI of your application in a headless browser. In which case you would have to use PhantomJS or Cypress.io. But that is not important right now.

There are, of course, a very large number of libraries meant to help out with unit testing, but these are some of the more popular ones currently:

- **Sinon.JS**: One of the favorite libraries used to create test doubles. It provides a variety of different functions for creating mocks, stubs, and other test doubles, that allow you to effectively verify how something works in isolation (single service integration tests). 

- **Supertest**: Allows us to run integration tests on our Node server without actually having to start it up. Supertest allows us to query our server and get results, just as if the server was actually running.

