# Tasks

## 1. Build the application

- Figure out which Vite command can build the application to production ready code and try it locally.
- In which folder the build artifacts are found?
- How differs the built JS and HTML files from the source files?
- You can serve the production files with the `npm run preview` command.

## 2. Deploy the page to GitHub Pages

- Vite has a description how you can do the deploy: https://vitejs.dev/guide/static-deploy.html#github-pages
- Create a separate workflow for that.
- Take care that you need to add the install and build *steps* to the deploy *job*.
- Take care that you need a the `vite.config.js` according to the description. 

## 3. Trigger the deployment manually

- It is not so good if the deployment is live automatically before the tests are executed.
- Either go with the continuous delivery direction and figure out how to trigger the deployment job manually (dispatch a workflow)
or go further with continuous deployment and make the two workflow dependent from each other.

https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows

## 4. Get familiar with the code.

- Where is the entry point?
- Where the Bootstrap lib is added to the app?
- What does the `app.js` do?
- What does the `element` function do?
- How the `element` function recognize the event handlers?

## 5. User Story: Display the recipe titles.

As a user, I can make the recipes names visible so I can see what is possible to cook.

- When the user clicks on the Show Recipes button the list of recipe titles 
should be displayed.
- Style it as Bootstrap Cards.
- You do not need to use the `element` function, feel free to go with your solution.
- You can use the `getRecipes` function to get a list of recipes.
- It is not needed to create new tests for this feature, tests are just illustrative examples here.

## 6. User Story: Display the recipe details.

As a user, I can see the details of the recipes, so I have all information to cook something.

- Extend the content of the Cards with at least the ingredient list and a cooking steps.
- Display the cards next to each other horizontally. If the screen is get smaller, 
the cards should be wrapped.
- It is not needed to create new tests for this feature, tests are just illustrative examples here.
