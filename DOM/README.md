- When a web page is loaded, the browser creates a `Document Object Model` of the page.

- We have different types of DOM Selectors :- 
    - `getElementByTagName(tag_name)` -> selects the object with the given tag name. Returns a HTML Collection.
    - `getElementById(id)` -> selects the object with the given id value. Returns the element or null, if it doesn't exist.
    - `getElementsByClassName(class_name)` -> selects the object that has the class name as given. Returns a HTML Collection.
    - `querySelector(param)` -> selects the object with the given parameter, can be a class(with . operator), an id (with # operator), or simply the tag name. It returns only the first element.
    - `querySelectorAll(param)` -> same as querySelector but it selects all the elements and returns a HTML Collection.

- We've 3 types of content readers :-
    - `innerText` -> Only the textual part is returned
    - `innerHTML` -> All the content within the selected object is returned
    - `textContent` -> The textual part is returned but in a very distorted order