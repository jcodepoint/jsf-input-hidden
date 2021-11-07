var modal = document.getElementById('check-modal');
var btn = document.getElementById('result-form:check-button');
var ptext = document.getElementById('text');
var span = document.getElementById('close-button');

function openModal(){
	var hiddenFirstName = document.getElementById('result-form:hiddenfirstname').value;
	var hiddenLastName = document.getElementById('result-form:hiddenlastname').value;
	ptext.innerHTML = '<ul style:list-style-type:disc><li>First Name: ' + hiddenFirstName + '</li><li>Last Name: ' + hiddenLastName + '</li></ul>';
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display = 'none';
}

window.addEventListener('click', 
	function(e){
		if (e.target == modal) {
			modal.style.display = 'none';
		}
	}
);
