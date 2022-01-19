let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  getAllToys();
});

function getAllToys() {
  return fetch('http://localhost:3000/toys')
  .then (r => r.json())
  .then (data => renderToys(data)
  )
}
function renderToys(toys) {
  const toyCollection = document.getElementById('toy-collection');
  toys.forEach (toy => {
    const toyList = document.createElement('div');
    toyList.classList.add("card")
    toyList.innerHTML = `
     <h2>${toy.name}</h2>
  <img src="${toy.image}" class="toy-avatar" />
  <p>${toy.likes} Likes </p>
  <button class="like-btn" id="${toy.id}">Like ❤️</button>
  `
  toyCollection.appendChild(toyList);
  })}
