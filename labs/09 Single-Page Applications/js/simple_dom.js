//console.log('page loaded');

console.log(document);

//document.getElementById('save').onclick = function(){	
var heading = document.querySelector('#userForm input[type="text"]');
var email = document.querySelector('#userForm input[type="email"]');
var password = document.querySelector('#userForm input[type="password"]');
heading.onkeyup = function () { document.querySelector('#summary h1').innerHTML = heading.value; }
var paragraphs = document.querySelectorAll('#summary p');
email.onkeyup = function () { paragraphs[0].innerHTML = email.value; }
password.onkeyup = function () { paragraphs[1].innerHTML = password.value; }

//};

/*document.querySelector('#userForm input[type="email"]').onkeypress = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};


function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
};*/