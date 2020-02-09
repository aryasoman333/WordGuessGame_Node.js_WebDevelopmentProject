# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?
## A:
      Dynamic assets are those that changes from one request to another. 
      They are generated dynamically each time a request is sent. 
      Examples of Dynamic assets are HTML, javascript etc.

      Static assets are reffered to the code that are not generated on the fly. 
      Their content will not change from one request to another and remains the same all the time. 
      Examples of static assets are css files, images etc.

## Q: What is the difference between a relative and absolute file path in a URL?  What is the "webserver root" and how does this relate to it?
## A:
      A relative path defines the navigation to a particular file/directory with respect to the path of the currently loaded page.Means, you take the current working directory as a reference to determine the location or path of another file or directory.
      It starts with a period (.) or the folder or asset name directly.

      example:
      <img src = images/avatar.png>
      <img src = .images/avatar.png>
      <img src = ..public/images/chat.css> -->(2 folders back)

      An absolute path defines the full location of a path. It means, absolute path contains the full path to the file or directory starting from the root(/). It starts with the root which can be forward slash '/' or backward slash '\' depending on the current operating system. Absolute paths refer to the same file or directory regardless of which directory you are in.

      example:
      <img src = /images/avatar.png>

      web server root(/) is main folder that contains all sub folders and files of a web application. The web server root folder is publicly accessible in the internet when the web server is running. It denotes the base level of a web server tree.

      Absolute paths start from the webserver root(/) whereas relative paths do not.
      
## Q: What is the difference between server-side and client-side JS?
##A:

      Server-side javascript uses the web server as an environment to run. 
      Here the scripting language is run on a server to generate dynamic html pages. 
      Once the html is generated, it is sent to the browser(client side). 
      This helps in creating interactive web sites that has direct access to databases from the server and perform operations directly on the server.
      example: javascript(front-end)

      Client-side javascript uses the browser as an environment to run. 
      The javascript source code is transferred from the server to user's computer(client/browser) and run there. 
      Here, the browser interprets the script at run-time.
      example: node.js

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?
## A:
      var : var is function scoped and allows hoisting. 
      Used to reference only the old JS engines.

      const: const is block scoped and does not hoist. 
      Used to store variables that do not change, and also objects or arrays whose data can change.

      let: let is also block scoped and does not Hoist. 
      But unlike const, variables declared using let can be re assigned with other values. 
      So let is usually used for storing values that change frequently(eg. for loop variables)
      
## Q: What are the 4 ways to create inheritance? (no examples needed, just a sentence describing each)

## A:
      1) Delegation / Differential Inheritance

      Once inherited from the delegate prototype, the new object gets a reference to the prototype and a when we try to access a property, it first checks the object's own properties first, if it cannot find then it checks if it's prototype has it , if it is still unable to find, it will check if the prototype's prototype has it and so on until the object does not have a prototype.

      2)Concatenative Inheritance / Cloning / Mixins
      Concatenative Inheritance does not retain reference between two objects, rather, copies properties from one object to another.

      3)Functional Inheritance
      In functional Inheritance, one object will inherit from another and takes the result and add those to the child to achieve inheritance.
      
      4) Pseudoclassical Inheritance
      This type of inhertance is similar to class wide inheritance where objects are created as instances of the classes and uses a constructor function with a prototype added and the 'new' operator to implement the inheritance.

## Q: Give a demonstration of 1 way to create JS inheritance to _inherit_ a method named "purr".
## A:

    class MyCat {
    constructor (sound) {
        this.sound = sound || 'purr';
    }
    purr() {
        return `My cat makes a sound ${ this.sound }!`;
    }
    }

    const meow = new MyCat('meow');

    const makeSound = meow.purr();

    console.log(makeSound); // My cat makes a sound meow!


## Q: Give a demonstration of a different way to create JS inheritance to _inherit_ a method named "hiss".
## A:

    const proto = {
    hiss: function hiss() {
        return `My snake makes a sound ${ this.sound }!`;
    }
    };
    const hiss = Object.assign({}, proto, {sound: 'hiss'});

    const makeSound = hiss.hiss();

    console.log(makeSound); // My snake makes a sound hiss!


## Q: Explain this sentence: "In CSS, you can select an element based on its ancestors, but you can't select an element based on its descendants"  Make an example and say a concept that cannot be selected.
## A:

      In CSS there is a concept called DESCENDANT SELECTORS. It uses more than one tags to select and apply property to an element based on it's ancestor. In this the ancestors are mentioned along with their descendants, but only the descendant elements are selected and applied properties to it.

example:
HTML file:

<html>
      <head>
      <head>
      <body>
            <ol>
                  <li>
                        <a href = "www.google.com"> GOOGLE </a>
                  </li>
            </ol>
            <a href = "www.yahoo.com"> YAHOO </a>
      </body>
</html>
CSS FILE:

li a{
      color: blue;
}

here, only those anchor tags that are descendants of list elements(<li>) will have a color of BLUE.
So, GOOGLE will displayed in blue color whereas YAHOO will not.


## Q: Explain what a callback is, and give an example.
## A:

A call back is a function which gets executed once another functions has completed its execution. A javascript function can take other functions as arguments and also a function can be returned by other functions. Such a function which is passed as an argument is known as callback function. Using callbacks, we can ensure that some part of the code is not executed until another code has finished it's execution. 

Example:
function prepareBreakfast(dish, callback) {
 alert(`I am preparing ${dish} for breakfast..!`);
 callback();
}

prepareBreakfast('pasta', function() {
 alert('Finished preparing breakfast..!');
});

## Q: In CSS, what does it mean "You shouldn't name your classes after what they will appear like"?   Why?  Give an example of a class that is well named and a class that is poorly named.
## A:

It is always best to choose class names that relate to a semantic meaning of the content or element. If we name the class based on the appearance of the property, we will have to rename it each time we wish to change the appearance(visible properties like color/size etc and not functionality). Semantic means what it is and what it means and not what it looks like.

Example of well named class:

here the class name is "valid-words". Hence the unordered list can have words with any number of letters or symbols in future

 <ul class="valid-words">
      <li>
      <span class="words">TEE</span>
      </li>
      <li>
         <span class="words">ATE</span>
      </li>
</ul>

Example of poorly named:
here the class name is "3letter-words". Hence the unordered list cannot have words other that 3 letter words in future

<ul class="3letter-words">
      <li>
      <span class="words">TEE</span>
      </li>
      <li>
         <span class="words">ATE</span>
      </li>
</ul>