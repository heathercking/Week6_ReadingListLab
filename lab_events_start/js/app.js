document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmission);
 
  const deleteAll = document.querySelector("#delete-all");
  deleteAll.addEventListener("click", handleListRemoval);
});


const handleFormSubmission = function (event) {
  event.preventDefault();
  const newEntry = document.createElement("li");

  let titleFill = document.createElement("h2");
  titleFill.textContent = event.target.title.value;
  titleFill.classList.add("book-title");
  newEntry.appendChild(titleFill);

  let authorFill = document.createElement("h3");
  authorFill.textContent = event.target.author.value;
  newEntry.appendChild(authorFill);

  let categoryFill = document.createElement("p");
  categoryFill.textContent = event.target.category.value;
  newEntry.appendChild(categoryFill);


  newEntry.classList.add("publication")
  authorFill.classList.add("book-author")
  categoryFill.classList.add("book-category")

  const formReturn = document.querySelector("#reading-list");
  formReturn.appendChild(newEntry);
  
  const form = document.querySelector("#new-item-form");
  form.reset();
  console.log(formReturn.innerHTML);
  // console.log(formReturn)
}


const handleListRemoval = function (event) {

  const readingList = document.querySelector("#reading-list");
  readingList.innerHTML = ""

}