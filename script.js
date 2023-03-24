var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

  
  // Select and cache the <main>element in a variable named mainEl.
  const mainEl = document.querySelector("main");
  
  
  // Set the background color of mainElto the value stored in the --main-bgCSS custom property.
  mainEl.style.backgroundColor = `var(--main-bg)`;
  
  
  // Set the content of mainElto <h1>SEI Rocks!</h1>.
  let headEl = document.createElement("h1");
  
  headEl.textContent = "SEI Rocks!";
  
  mainEl.appendChild(headEl);
  
  
  
  // Add a class of flex-ctr to mainEl.
  mainEl.classList.add("flex-ctr");
  
  // Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
  const topMenuEl = document.querySelector("#top-menu");
  
  // Set the height topMenuElelement to be 100%.
  topMenuEl.style.height = '100%';
  
  
  // Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
  topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
  
  
  // Add a class of flex-aroundto topMenuEl.
  topMenuEl.classList.add("flex-around");
  
  
  
  menuLinks.forEach(function (link) {
    const aEl = document.createElement("a");
    aEl.href = link.href;
    aEl.textContent = link.text;
    topMenuEl.appendChild(aEl);
  });
  
  


// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

const subMenuEl = document.querySelector('#sub-menu')

// Set the height subMenuElelement to be 100%.

subMenuEl.style.height = '100%'


// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.

subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

// Add the class of flex-around to the subMenuEl element.

subMenuEl.className = 'flex-around'

// Set the CSS position property of subMenuElto the value of absolute.

subMenuEl.style.position = 'absolute'


// Set the CSS top property of subMenuElto the value of 0.

subMenuEl.style.top = 0

//   Declare a global showingSubMenu variable and initialize it to false;

let showingSubMenu = false


// Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

const topMenuLinks = document.querySelectorAll('a')

// console.log(topMenuLinks)

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

topMenuEl.addEventListener('click' , function(event) {

event.preventDefault()

// return if the element clicked was not an <a>element.
if (event.target.tagName !== 'A') {
    return 
}

// console.log the content of the <a>to verify the handler is working.
// console.log()

// Task 5.3
// Next in the event listener, if the clicked <a> link has a class of active:

if (event.target.classList.contains('active')) {
    event.target.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = 0
    return
}


// add console.log(event)
// remove a class name of active from each <a> element in topMenuLinks
for (i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove('active')

}
// Task 5.5
// Next, the event listener should add a class name of active to the <a>element that was clicked.

event.target.className = 'active'


// Task 5.6



let link = ''

for (i = 0; i < menuLinks.length; i++) {


  if (menuLinks[i].text === event.target.textContent) {

    link = menuLinks[i].subLinks[i]

      
      if (menuLinks[i].subLinks) {
          console.log(menuLinks[i].subLinks[i])
          
          showingSubMenu = true
        
      } else {
        showingSubMenu = false
      }
      
    }
  
}




function buildSubMenu(link) {
 
  subMenuEl.style.top = '100%'

  subMenuEl.textContent = '' 
  
  const createEl = document.createElement('a')
  createEl.href = link.href
  createEl.textContent = link.text
  subMenuEl.appendChild(createEl)


}


if (showingSubMenu == true) {
    buildSubMenu(link)

} else {
  showingSubMenu = false
  subMenuEl.style.top = 0
}



});








