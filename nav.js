function clicker1()
{
  window.open("/Users/sidkonnar/Documents/Web Dev Udemy/PERSONAL/resume.html")
}

function clicker2()
{
  window.open("https://www.rnsit.ac.in")
}

function clicker3()
{
  window.open("https://www.vidyaniketan.edu.in")
}

document.getElementsByClassName("nav1")[0].addEventListener("click",clicker1);
document.getElementsByClassName("nav3")[0].addEventListener("click",clicker2);
document.getElementsByClassName("nav5")[0].addEventListener("click",clicker3);
