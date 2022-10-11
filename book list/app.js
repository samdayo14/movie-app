// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
};

// show Alert
UI.prototype.showAlert = function (message, className) {
  // create div element
  const div = document.createElement("div");
  // Add class
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector(".container");
  // Get form
  const form = document.querySelector("#book-form");
  // insert alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Delete book
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

// Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event Listeners add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // validate

  if (title === "" || author === "" || isbn === "") {
    // error alert
    ui.showAlert("please fill in the fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // show success
    ui.showAlert("Book Added!", "success");

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// event listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  // Instantiate UI
  const ui = new UI();

  // Delete Book
  ui.deleteBook(e.target);

  // show message
  ui.showAlert("Book Removed!", "success");

  e.preventDefault();
});
