
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

let table = document.createElement('table');
let headings = document.createElement('tr');
let titleHeading = document.createElement('th');
let yearHeading = document.createElement('th');
titleHeading.innerHTML = "Title";
yearHeading.innerHTML = "Year";
headings.appendChild(titleHeading);
headings.appendChild(yearHeading);
table.appendChild(headings);

for (var i = 0; i < books.length; i++) {
	let column = document.createElement('tr');
	let titleCell = document.createElement('td');
	let yearCell = document.createElement('td');
	titleCell.innerHTML = books[i].title;
	yearCell.innerHTML = books[i].year;
	column.appendChild(titleCell);
	column.appendChild(yearCell);
	table.appendChild(column);
}
document.body.appendChild(table);

for (let i = 0; i < table.rows.length; i++) {
	table.rows[i].onclick = function () {
		let title = table.rows[i].cells[0].innerHTML;
		document.getElementById("book").innerHTML = "Selected book: " + title;
	};
}

document.getElementsByTagName('tr')