/**
 * Test case for Greeter.
 */
GreeterTestCase = new TestCase("GreeterTestCase");

GreeterTestCase.prototype.testSayHelloToWorld = function() {
  var msg = Greeter.sayHelloTo("World");
  assertThat(msg, equalTo("Hello, World!"));
};

GreeterTestCase.prototype.testSayHelloToAnonymous = function() {
  var msg = Greeter.sayHelloTo();
  assertThat(msg, equalTo("Hello, Anonymous!"));
};
