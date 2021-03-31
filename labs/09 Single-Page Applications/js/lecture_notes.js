var notes = [];

/*
 * displays the 'add' screen if this has been bookmarked by user
 */
if (window.location.hash == '#add' || notes.length === 0) {
	document.getElementById('editPage').style.display = 'none';
} else {
	document.getElementById('addPage').style.display = 'none';
}

document.querySelector('#addPage button').onclick = function () {
	console.log('add note');
	var title = document.querySelector('#addPage input');
	var note = document.querySelector('#addPage textarea');
	notes.push({ title: title.value, note: note.value });
	console.log(notes);
	title.value = '';
	note.value = '';

	loadList();
};

document.getElementById("update").onclick = function () { updateNote(); };

/*
 * handles navigation between the add and edit 'screens'
 */
document.querySelector('nav > ul > li:nth-child(1)').onclick = function () {
	updateView('add');
};

document.querySelector('nav > ul > li:nth-child(2)').onclick = function () {
	updateView('edit');
};


function updateNote() {
	console.log('update note');
	var title = document.querySelector('#editPage input').value;
	var note = document.querySelector('#editPage textarea').value;
	var id = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log(id);
	var updated = { title: title, note: note };
	console.log(updated);
	notes[id] = { title: title, note: note };
	console.log(notes);
}

function display(element) {
	console.log('display');
	console.log(element.parentNode.parentNode.id);
	var details = document.getElementById('details');
	var id = element.parentNode.parentNode.id;
	document.querySelector('#editPage input').value = notes[id].title;
	document.querySelector('#editPage textarea').value = notes[id].note;
	document.querySelector('#editPage p').innerHTML = id;
}

function rem(element) {
	console.log('remove');
	var id = element.parentNode.parentNode.id;
	console.log(id);
	notes.splice(id, 1);
	loadList();
	var editId = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log('id: ' + id);
	console.log('editId: ' + editId);
	if (id == editId) {
		console.log('deleted document being edited!');
		document.querySelector('#editPage input').value = '';
		document.querySelector('#editPage textarea').value = '';
	}
}

function loadList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i < notes.length; i++) {
		var row = document.createElement('tr');
		row.id = i;
		row.innerHTML = '<td><a onclick="display(this)" href="#">' + notes[i].title + '</a></td><td><a onclick="rem(this)" class="delete" href="#">delete</a></td>';
		table.appendChild(row);
	}
}

function updateView(view) {
	if (view === 'add') {
		document.getElementById('addPage').style.display = 'inherit'
		document.getElementById('editPage').style.display = 'none'
	} else if (view === 'edit') {
		document.getElementById('addPage').style.display = 'none'
		document.getElementById('editPage').style.display = 'inherit'
	}
}