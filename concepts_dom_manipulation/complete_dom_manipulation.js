// /*-------------------------------------Introduction to the DOM

// What is the DOM?: The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.
// DOM tree structure: The DOM represents the document as a tree of nodes, with each node corresponding to an element, attribute, or text.
// Nodes: Nodes are the fundamental units of the DOM, representing elements (tags), attributes (like class or id), and text within elements.


// ----------------------Selecting DOM Elements
// 
// // document.getElementById(): Selects a single element by its unique ID.

const root = document.getElementById('root');

console.log(root);


// document.getElementsByClassName(): Selects all elements with a given class name.


const myNavbar = document.getElementsByClassName('navbar');

console.log(myNavbar);

// document.getElementsByTagName(): Selects all elements with a specific tag name.

const myTag = document.getElementsByTagName('ul');

console.log(myTag);


// document.querySelector(): Selects the first element that matches a CSS selector.

const mySingleLi = document.querySelector('li');

console.log(mySingleLi);

// document.querySelectorAll(): Selects all elements that match a CSS selector.

const myList = document.querySelectorAll('li');

console.log(myList);


// ------------------------Manipulating Content


// innerHTML vs textContent: innerHTML sets or retrieves HTML content inside an element, while textContent sets or retrieves text content only.
mySingleLi.textContent = `<a href="#">LOGO</a>`;

// Adding/removing text content: Methods for dynamically changing the text inside an element.
mySingleLi.innerHTML = mySingleLi.innerHTML.replace('LOGO', '');//removing inner text
mySingleLi.innerHTML = `<a href="#">TCA</a>`;//adding inner content
mySingleLi.textContent = '';//removing inner text
mySingleLi.textContent += '[ TC';//adding inner content
mySingleLi.textContent += 'A ]';//adding inner content

// Working with innerHTML, outerHTML: innerHTML allows setting or getting the HTML inside an element, while outerHTML includes the element itself.
mySingleLi.innerHTML = `<a href="#">TCA</a>`;//adding inner content
mySingleLi.outerHTML = `
        <strong id="myNewLogo" >
          <a id="logo" href="#HOME" >TCA</a>
        </strong>`;//adding inner content


// -----------------------Manipulating Styles


// Inline styles: style property: Directly sets styles on an element using the style property.
mySingleLi.style.backgroundColor = "aliceblue";
mySingleLi.style.color = "red";
mySingleLi.style.fontSize = "28px";


// Adding/removing CSS classes: classList property (add(), remove(), toggle(), contains()): Methods for dynamically adding, removing, toggling, and checking for CSS classes on an element.


const bgChange = document.querySelector('span');
const modeIcons = document.querySelectorAll('.mode'); // Renamed for clarity
const myList1 = document.querySelector('.myList'); // Select the myList

bgChange.id = "bg-changer"; // Adding id to the span
bgChange.className = "bg-changer1"; // Adding class to span
bgChange.classList.add("light"); // Start with light class

// Function to toggle between dark and light classes
modeIcons.forEach(modeIcon => {
  modeIcon.onclick = function () {
    if (bgChange.classList.contains("light")) {
      bgChange.classList.remove("light");
      bgChange.classList.add("dark");
      document.body.style.backgroundColor = "black";
      modeIcon.style.fill = "white"; // Change SVG color to white
      myList1.style.backgroundColor = "gray"; // Change myList background color
      myList1.style.color = "white"; // Change myList text color
      myList1.querySelectorAll('a').forEach(link => link.style.color = "white"); // Change link color
    } else {
      bgChange.classList.remove("dark");
      bgChange.classList.add("light");
      document.body.style.backgroundColor = "white";
      modeIcon.style.fill = "black"; // Change SVG color to black
      myList1.style.backgroundColor = ""; // Reset myList background color
      myList1.style.color = "black"; // Change myList text color
      myList1.querySelectorAll('a').forEach(link => link.style.color = "black"); // Reset link color
    }
  };
});

//for hamburger
// ...TODO

const hamburgerIcon = document.getElementById('hmbgr');
console.log(hamburgerIcon);

hamburgerIcon.onclick = function () {
  console.log("hamburger clicked");
  const hamburger_menu = document.querySelector('.hamburger');

  if (hamburgerIcon.src.includes('hamburger-close.svg')) {
    hamburgerIcon.src = "hamburger-open.svg";
    hamburger_menu.style.display = "flex";
  } else {
    hamburgerIcon.src = "hamburger-close.svg";
    hamburger_menu.style.display = "none";
  }


}

//adding the new logo
const myNewLogo = document.querySelector('#myNewLogo');
myNewLogo.innerHTML = "<p>TCA</p>"

// Handling computed styles: getComputedStyle(): Retrieves the actual computed styles applied to an element, as determined by the browser.


function getComputedStyles() {
  const rootElement = document.getElementById('root');
  const myListElement = document.querySelector('.myList');
  const linkElement = document.querySelector('.myList a');

  const rootStyles = getComputedStyle(rootElement);
  const myListStyles = getComputedStyle(myListElement);
  const linkStyles = getComputedStyle(linkElement);

  console.log('Root Styles:', {
    display: rootStyles.display,
    justifyContent: rootStyles.justifyContent,
    alignItems: rootStyles.alignItems,
    flexWrap: rootStyles.flexWrap,
  });

  console.log('MyList Styles:', {
    display: myListStyles.display,
    gap: myListStyles.gap,
    padding: myListStyles.padding,
    borderRadius: myListStyles.borderRadius,
    backgroundColor: myListStyles.backgroundColor,
  });

  console.log('Link Styles:', {
    listStyle: linkStyles.listStyle,
    textDecoration: linkStyles.textDecoration,
    color: linkStyles.color,
  });
}
getComputedStyles();


// ---------------------- Manipulating DOM Elements


// Creating elements: document.createElement(): Creates a new element node.

const main = document.createElement('div');
main.id = "main";
console.log(main);

const footer = document.createElement('div');
footer.id = "footer";
console.log(footer);

let ncomment = document.createComment("This is navbar section");
console.log(ncomment);

let nccomment = document.createComment("This is navbar content");
console.log(nccomment);

let nhbcomment = document.createComment("This is hamburger content");
console.log(nhbcomment);

let hcomment = document.createComment("This is hero section");
console.log(hcomment);


let hleftcomment = document.createComment("This is hero left content");
console.log(hleftcomment);


let hrightcomment = document.createComment("This is hero right content");
console.log(hrightcomment);

let mcomment = document.createComment("This is main section comment");
console.log(mcomment);

let mnewText = document.createTextNode("This is main content ");
console.log(mnewText);

let fcomment = document.createComment("This is footer section comment");
console.log(fcomment);

let fnewText = document.createTextNode("This is footer content ");
console.log(fnewText);

// Appending elements: appendChild(), insertBefore(): Appends a new child node to a parent or inserts it before an existing child node.

// appendChild():
//appending the main to the root
main.appendChild(mcomment);
main.appendChild(mnewText);
root.appendChild(main);

// appending the footer to the root
footer.appendChild(fcomment);
footer.appendChild(fnewText);
root.appendChild(footer);


// insertBefore():

// --------------------------------------------------------------------------------------------------------------
// Insert the navbar comments before the navbar element and inside

const rt = document.getElementById('root');
console.log(rt.childNodes, { count: rt.childNodes.length });
root.insertBefore(ncomment, root.childNodes[0]); // Insert navbar comment

// Assuming the navigation bar has the class 'navbar'
const navigation = document.querySelector('.navbar');
console.log(navigation.childNodes, { count: navigation.childNodes.length });
navigation.insertBefore(nccomment, navigation.childNodes[0]); // Insert navbar content comment
navigation.insertBefore(nhbcomment, navigation.childNodes[3]); // Insert hamburger content comment

// -------------------------------------------------------------------------------------------------------------------

//Insert the hero comments before the hero element and inside

const heroSection = document.querySelector('.heroSection');
console.log(heroSection.childNodes, { count: heroSection.childNodes.length });
rt.insertBefore(document.createComment("This is hero section "), rt.childNodes[3]);

const heroC = document.querySelector('.container');
console.log(heroC.childNodes, { count: heroC.childNodes.length });
heroC.insertBefore(hleftcomment, heroC.childNodes[0]);
heroC.insertBefore(hrightcomment, heroC.childNodes[4]);
//---------------------------------------------------------------------------------------------------------------------
//insert the comment before main element and inside
const mainSection = document.querySelector('#main');
console.log(mainSection.childNodes, { count: mainSection.childNodes.length });
root.insertBefore(mcomment, root.childNodes[6]);

// --------------------------------------------------------------------------------------------------------------

//insert the comment before main element and inside
const footerSection = document.querySelector('#footer');
console.log(footerSection.childNodes, { count: footerSection.childNodes.length });
root.insertBefore(fcomment, root.childNodes[9]);

//--------------------------------------------------------------------------------------------------------------------
// Select the root element
const root1 = document.getElementById('root'); // Ensure there's a root element in your HTML

// Create a target element
const myElement = document.createElement('div');
myElement.id = 'temp_element';
root1.appendChild(myElement);

// Select the target element
const targetElement = document.getElementById('temp_element');

// Create new elements
const newElement1 = document.createElement('div');
newElement1.textContent = 'Before Begin';

const newElement2 = document.createElement('div');
newElement2.textContent = 'After Begin';

const newElement3 = document.createElement('div');
newElement3.textContent = 'Before End';

const newElement4 = document.createElement('div');
newElement4.textContent = 'After End';

// Insert the new elements using insertAdjacentElement : create if not then append
targetElement.insertAdjacentElement('beforebegin', newElement1); // Before target
targetElement.insertAdjacentElement('afterbegin', newElement2);  // Inside, before first child
targetElement.insertAdjacentElement('beforeend', newElement3);   // Inside, after last child
targetElement.insertAdjacentElement('afterend', newElement4);    // After target


//insertAdjecentHTML

root.insertAdjacentHTML("beforebegin", "<center><h3>Thank you for visite</h3></center>");
root.insertAdjacentHTML("afterbegin", "<center><h3>Thank you for visite</h3></center>");
root.insertAdjacentHTML("beforeend", "<center><h3>Thank you for visite</h3></center>");
root.insertAdjacentHTML("afterend", "<center><h3>Thank you for visite</h3></center>");


//insertAdjecentText

root.insertAdjacentText("beforebegin", "Thank you for visite");
root.insertAdjacentText("afterbegin", "Thank you for visite");
root.insertAdjacentText("beforeend", "Thank you for visite");
root.insertAdjacentText("afterend", "Thank you for visite");


// In the DOM (Document Object Model), every element, attribute, and piece of text is represented as a node. Nodes are categorized by node types, and each node type is represented by a unique number. Here’s an overview of common node types:

// Element nodes (e.g., <div>, <p>): nodeType === 1
// Attribute nodes (attributes on elements like id, class): nodeType === 2 (though attributes are rarely accessed this way in modern JavaScript)
// Text nodes (the actual text inside elements): nodeType === 3
// So, when you check node.nodeType === 3, you are determining if the current node is a text node.

// Removing elements: removeChild(): Removes a child node from its parent node.

//removing textNode

const root3 = document.getElementById('root');
const body3 = document.body;
console.log('root3', {
  nodeType: root3.nodeType,
  nodeName: root3.nodeName,
}, 'body3', {
  nodeType: body3.nodeType,
  nodeName: body3.nodeName,
});

// Looping through the child nodes of root3
root3.childNodes.forEach(node => {
  if (node.nodeType === 3) { // Check if it's a text node (nodeType 3)
    node.textContent = ''; // Remove the text content
  }
});

console.log("Text nodes removed from #root");

body3.childNodes.forEach(node => {
  if (node.nodeType === 3) {
    node.textContent = "";
  }
});
console.log("Text nodes removed from body");

//removing all the h3

const h3 = document.querySelectorAll('h3');
console.log(h3.length);
h3.forEach(element => {
  element.remove();

});
// Removing elements
// Assuming newElement1 is a child of targetElement

try {
  targetElement.removeChild(newElement1);
} catch (err) {
  console.log(err.message, {
    code: err.code,
    name: err.name,
    message: "not a child of targetElement"
  });
}

// This will throw an error since newElement2 is not a child of targetElement

// To remove newElement2 correctly:
newElement1.remove(); // Remove newElement2 from the DOM

// To remove newElement4 correctly, you can call remove directly on it
newElement4.remove(); // Remove newElement4 from the DOM

//removing newElement1

if (targetElement.contains(newElement2)) {
  targetElement.removeChild(newElement2); // This removes newElement2 from targetElement 
}
//--------------------------------------------------------------------------------------------------
// Replacing elements
const newElement5 = document.createElement('div');
newElement5.textContent = 'Replaced Element';

// Replace newElement3 with newElement5
targetElement.replaceChild(newElement5, newElement3); // Replaces newElement3 with newElement5

// Replacing the targetElement itself
const newTarget = document.createElement('div');
newTarget.textContent = 'I replaced myself!';
targetElement.replaceWith(newTarget); // Replace targetElement with newElement6

newTarget.remove();
main.replaceWith(footer);
footer.replaceWith(main);
//remove all temp elements
main.remove();
footer.remove();
mcomment.remove();
mnewText.remove();
fcomment.remove();
fnewText.remove();

//Creating main section for my website

const myMainS = document.createElement('div');
myMainS.id = "sectionMain";

for(let i=0; i<4; i++){
  const myDiv=document.createElement('div');
myDiv.className="MD";
myMainS.appendChild(myDiv);
}
root.insertAdjacentElement('beforeend',myMainS);

//Creating footer section for my website

const myFooterS = document.createElement('div');
myFooterS.id='sectionFooter';
myFooterS.style.backgroundImage="img/mainSection.jpg";
myFooterS.style.backgroundRepeat="no-repeate";
root.insertAdjacentElement('beforeend',myFooterS);


//--------------------------------------------------------------------------------------------------------------------

// ---------------------Manipulating Attributes

// Getting and setting attributes: getAttribute(), setAttribute(): Retrieves or sets the value of an attribute on an element.
// Removing attributes: removeAttribute(): Removes an attribute from an element.
// Handling data attributes: Special attributes prefixed with data- used for embedding custom data within elements.



// --------------------Event Handling in the DOM


// Adding event listeners: addEventListener(): Attaches an event handler function to an element for a specific event.

// Removing event listeners: removeEventListener(): Removes an event handler that was previously added with addEventListener.
// Event object, event propagation (bubbling and capturing): The event object contains details about the event. Event propagation refers to the order in which events are handled (bubbling or capturing).
// Event delegation: A technique to handle events efficiently by assigning a single event handler to a parent element instead of multiple handlers.
// Common events: click, focus, blur, change, submit, etc.: Examples of frequently used DOM events that can be handled with JavaScript.

// ------------------- Working with Forms


// Accessing form elements: form.elements, form.submit(): Methods for accessing and submitting form data.
// Validating form input: Techniques for ensuring user input is valid before submitting a form.
// Handling form submissions with JavaScript: Methods for capturing and processing form data on the client side using JavaScript.


// -------------------- DOM Traversal

// Parent, child, and sibling relationships: Refers to navigating through parent, child, and sibling nodes within the DOM tree.
// parentNode, childNodes, firstChild, lastChild: Properties that allow access to the parent of a node, all child nodes, the first child, and the last child of a node.
// previousSibling, nextSibling: Properties that allow access to the previous and next sibling nodes.
