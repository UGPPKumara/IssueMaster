function addIssue() {
    var issueName = document.getElementById("issue-name").value;
    var priority = document.getElementById("priority").value;
    var fileInput = document.getElementById("file-upload");
    var fileName = fileInput.files.length > 0 ? fileInput.files[0].name : "";

    if (issueName === "") {
        alert("Issue name cannot be empty!");
        return;
    }

    var issueList = document.getElementById("issue-list");
    var issueDiv = document.createElement("div");
    issueDiv.className = "issue";
    issueDiv.innerHTML = `<strong>${issueName}</strong> <br> Priority: ${priority} <br>File: ${fileName}<br>
                          <button onclick="editIssue(this)" class="edit-button">Edit</button>
                          <button onclick="deleteIssue(this)" class="edit-button">Delete</button>`;
    issueList.appendChild(issueDiv);

    // Clear input fields after adding issue
    document.getElementById("issue-name").value = "";
    document.getElementById("priority").value = "low";
    fileInput.value = "";
}

function editIssue(button) {
    var newIssueName = prompt("Enter new issue name:");
    if (newIssueName !== null) {
        button.parentNode.firstChild.innerHTML = `<strong>${newIssueName}</strong> - Priority: ${button.parentNode.children[1].textContent.split(":")[1].trim()} - File: ${button.parentNode.children[2].textContent.split(":")[1].trim()}`;
    }
}

function deleteIssue(button) {
    var confirmation = confirm("Are you sure you want to delete this issue?");
    if (confirmation) {
        button.parentNode.remove();
    }
}
