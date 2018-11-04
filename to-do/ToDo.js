//  a new  item is created when clicking on the "Add" button
  function newElement() 
  {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);

    //checkbox is created
    let checkbox= document.createElement('input');
    checkbox.type='checkbox';
    checkbox.setAttribute('id','check');

    //append checkbox to each new to-do item
    li.appendChild(checkbox);
    li.appendChild(t);
    if (inputValue === '')
    {
        alert("You must write something!");
    }
    else 
    {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = '';

    //create close button append to each added To-Do item
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7"); //\u00D7 is the encoding of unicode data "Multiplication sign(×)"
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    //close the current added list item when clicked "close" button
    for (i = 0; i < close.length; i++) 
    {
      close[i].onclick = function() 
      {
          let div = this.parentElement;
          div.style.display = "none";
      }
    }
  }
// Create a "close" button and append it to each list item
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) 
  {
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
  }

// Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) 
  {
      close[i].onclick = function() 
      {
          let div = this.parentElement;
          div.style.display = "none";
      }
  }

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') 
  {
    e.target.classList.toggle('checked');
  }
});