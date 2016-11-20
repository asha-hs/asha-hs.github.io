var heading = document.querySelector('h1');
heading.textContent = "Hello World!";

var imgref = document.querySelector('img');

imgref.onclick = function() {
	var srcatt = imgref.getAttribute('src');
	if(srcatt === 'images/mozilla-firefox.png') {
		imgref.setAttribute('src','images/globe.png');
	}else {
		imgref.setAttribute('src','images/mozilla-firefox.png');
	}

}
var user_button = document.querySelector('button');

function setUserName() {
	var user = prompt("please enter your name");
	localStorage.setItem('name',user);
	heading.textContent = "Mozilla is cool, "+user;	
}
if(!localStorage.getItem('name'))
{
	setUserName();
}else 
{
	heading.textContent = "Mozilla is cool,"+localStorage.getItem('name');
}
user_button.onclick = function() {
	setUserName();
}
