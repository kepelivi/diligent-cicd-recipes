import { getRecipes } from "./recipes.js";


function element(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key.startsWith('on')) {
      const eventName = key.toLowerCase().substring(2)
      element.addEventListener(eventName, value);
    } else {
      element.setAttribute(key, value);
    }
  })

  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child))
    } else {
      element.appendChild(child);
    }
  })
  return element;
}

function createContainer({ onShow }) {
  const container = element('div', { class: 'container' }, [
    element('h1', {}, ['My Recipes']),
    element('button', { class: 'btn btn-primary', onClick: onShow }, ['Show Recipes']),
    element('div', { id: 'recipeList', class: "container my-5" }),
  ])
  return container;
}

export function setupApp(root) {

  let isVisible = false;

  function handleShow(event) {
    isVisible = !isVisible;
    const list = event.target.parentNode.querySelector('#recipeList');

    const recipes = getRecipes();
    console.log(recipes)

    if (isVisible) {
      list?.appendChild(element("div", { class: "row g-4" }));
      const row = event.target.parentNode.querySelector(".row");
      recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

        card.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${recipe.name}</h5>
              <p class="card-text"><strong>Preparation Time:</strong> ${recipe.preparation_time}</p>
              <p class="card-text"><strong>Servings:</strong> ${recipe.servings}</p>
              <p class="card-text"><strong>Ingredients:</strong></p>
              <ul class="list-unstyled">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient.item} - ${ingredient.quantity}</li>`).join("")}
              </ul>
              <p><strong>Instructions:</strong></p>
              <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join("")}
              </ol>
            </div>
          </div>
        `;
        row.appendChild(card);
      })
    } else {
      list.innerText = '';
    }
  }

  root.appendChild(createContainer({ onShow: handleShow }))
  return root;
}
