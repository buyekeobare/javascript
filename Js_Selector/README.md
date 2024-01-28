# TASK

## Document: querySelector() Method

The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

let li = document.querySelector("li");
let day = document.querySelector(".day");
let paragraph = document.querySelector("ul#list p");

## Document: querySelectorAll() Method

The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

let lis = document.querySelectorAll("li");
let paragraphs = document.querySelectorAll("li#special p");

## Element: classList property

The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.

let li = document.querySelector("li#special");
li.classList.remove("liked");
li.classList.add("something");

## Element: innerHTML property

The Element property innerHTML gets or sets the HTML or XML markup contained within the element.

To insert the HTML into the document rather than replace the contents of an element, use the method insertAdjacentHTML().

let li = document.querySelector("li")
li.innerHTML = "Hello World";