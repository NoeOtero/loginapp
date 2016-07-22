function getInfo(){
	var name = document.getElementById("name").value
	var email = document.getElementById("email").value
	var comment = document.getElementById("comment").value
	

	var nameText = document.createTextNode("Name: " + name)
	var emailText = document.createTextNode("E-mail: " + email)
	var commentText = document.createTextNode("Comment: " + comment)

	var newListItem = document.createElement("li")
	newListItem.classname = ("list-group-item")
	var newName = document.createElement("h1")
	newName.appendChild(nameText)
	var newEmail = document.createElement("h2")
	newEmail.appendChild(emailText)
	var newComment = document.createElement("h3")
	newComment.appendChild(commentText)

	newListItem.appendChild(newName)
	newListItem.appendChild(newEmail)
	newListItem.appendChild(newComment)
	document.getElementById("prevComments").appendChild(newListItem)
}