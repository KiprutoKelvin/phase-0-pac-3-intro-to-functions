function sayHelloTo(firstName) { 
    console.log(`Hello, ${firstName}!`);
 }
  
  sayHelloTo("Isabel"); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");
  say("Julio", "hello");
  function add(x, y) {
    return x + y;
  }
  console.log(add(1, 2));
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
   
  }
  console.log(say("Howdy", "partner"));
  console.log("I was called!");