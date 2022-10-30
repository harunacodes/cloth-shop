let demo = document.getElementById("demo")
let productPage = document.getElementById("productPage")
const greeting = document.getElementById("myP")

demo.addEventListener("click", function() {
    window.scrollTo(0, productPage.offsetTop)
})

function myfunctiona() {
    alert ('Something went wrong please try again')
    console.log('something went wrong please try agin')
}

function myfunction() {
    document.getElementById("productPage").style.
    display="flex"
}

let Name = prompt("what's your name")
let greets = Name
greeting.innerHTML = `hi ${Name}`;

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "ok proceed to the shop." );
  }
  
  function showCancel() {
    alert( "You are not buying cloth." );
  }
  
  ask("Do you want to buy cloth?", showOk, showCancel);