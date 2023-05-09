document.getElementById("parent").innerHTML=("Something Else");
document.getElementById("parent").style.cssText=("background-color:red; color:yellow; text-align:center");
document.getElementsByClassName("exercise")[0].innerHTML=("I am Cristiano Ronaldo");

document.getElementById("parent1").style.cssText=("background-color:yellow ; color:blue");

document.getElementsByClassName("exercise")[2].innerHTML=("I am Sergio Ramos");

document.getElementsByTagName("h1")[1].style.cssText=("background-color:pink; color:white");

document.querySelector("h2").style.cssText=("background-color:purple; color:white; text-align:center; text-transform:uppercase");

document.querySelector("#hi").style.cssText=("text-align:center");

document.querySelector(".hey").style.cssText=("text-align:center");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am Riwaj Maharjan");
    change[i].style.cssText=("background-color:aqua; color:blue");
}

function myFunction(){
    document.open();
    document.write("<h1>Hello World</h1>")
    document.close();
}