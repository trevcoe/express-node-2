### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

json web token is an open standard used to share security information between a client and a server.

- What is the signature portion of the JWT?  What does it do?

A jwt signature is used to validate that the token is trustworthy and has not been tampered with.

- If a JWT is intercepted, can the attacker see what's inside the payload?

yes, a jwt is easily decoded with the decode method. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.

jwt auth works by signing a token for a user. The token has a few relevant details about the user, and the token is assigned a secret key known only to the server that is transmitted on login. You can implement it so that every time a user wants to access a resource the token is required.

- Compare and contrast unit, integration and end-to-end tests.

End to end tests ensure the software works correctly from beginning to end in the user flow. It replicates expected user behavior. Integration testing test multiple modules to see if they work together.Integration testing happens early, end to end will happen near release. 

- What is a mock? What are some things you would mock?

Mocking creates a fake version of a service to mock some expected property. 

- What is continuous integration?

A practice where developers regularly merge code changes into a repository.

- What is an environment variable and what are they used for?

An EV is a dynamic object that contains en editable value. They are used to help programs know what directory to install files in.

- What is TDD? What are some benefits and drawbacks?

You only write code that's needed, its easier to maintain, easier to re-factor, and less debugging is required. It can be difficult to get into, though. It takes dedication.

- What is the value of using JSONSchema for validation?

It generates clear, human and machine readable documentation. Its easy to use for automation.

- What are some ways to decide which code to test?


- What does `RETURNING` do in SQL? When would you use it?

returning allows you to retrieve values of columns that were modified.

- What are some differences between Web Sockets and HTTP?

Web sockets are sent immediately when they are available. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I prefer express because Im more familiar with js. At my current level of understanding, though, I can use both frameworks equally. 