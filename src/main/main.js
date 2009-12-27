/**
 * @fileOverview Main source file.
 * @author <a href="mailto:your@email.com">Your Name</a>
 * @version 0.1
 */

/**
 * @namespace Holds the greeter functionality.
 */
Greeter = {

  /**
   * Greets something.
   * @param {String} [something="Anonymous"] Thing to greet.
   * @returns Nothing.
   */
  sayHelloTo: function(something) {
    return "Hello, " + (!something ? "Anonymous" : something) + '!';
  }
};

