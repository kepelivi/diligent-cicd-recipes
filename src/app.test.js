import { setupApp } from './app.js';
import { getByRole, findByText } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

function render() {
  const root = setupApp(document.createElement('div'))
  return root;
}

it('should display the heading', async () => {
  const container = render();
  const heading = getByRole(container, 'heading', { name: 'My Recipes' });

  expect(heading).toBeTruthy()
})

it('should display recipe list text, if the show recipes button clicked', async () => {
  const container = render();
  const showRecipesButton = getByRole(container, 'button', { name: 'Show Recipes' });
  await userEvent.click(showRecipesButton);

  const recipeList = await findByText(container, 'Recipe List');

  expect(recipeList).toBeTruthy();
})
