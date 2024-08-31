document.body.onload = addList;

function addList() {
    const ul = document.createElement("ul");
    document.body.append(ul);
}

function addListItem() {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = prompt("Enter an item for list:");
    if(li.textContent)
        ul.appendChild(li);
}


// const item = prompt("Enter some text for a new list item:");
document.addEventListener("click", function(e) {
    if(e.target.tagName == "LI") {
        e.target.textContent = prompt("Enter new content for your list item");
        return;
    }
    if (e.target.tagName != "UL") 
        addListItem();
});

// MDN Approach
// const list = document.createElement('ul');
// const info = document.createElement('p');
// const html = document.querySelector('html');

// info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

// document.body.appendChild(info);
// document.body.appendChild(list);

// html.onclick = function() {
//   const listItem = document.createElement('li');
//   const listContent = prompt('What content do you want the list item to have?');
//   listItem.textContent = listContent;
//   list.appendChild(listItem);

//   listItem.onclick = function(e) {
//     e.stopPropagation();
//     const listContent = prompt('Enter new content for your list item');
//     this.textContent = listContent;
//   }
// }