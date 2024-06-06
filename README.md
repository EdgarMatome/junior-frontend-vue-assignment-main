# Home assignment for a Frontend (Vue) candidate.

This mini-app is built with Vue 3, TypeScript and Vite. It uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.lt

**Please, fork these repo to complete the task. Don't open a pull request from your fork, just send us a link to your repo when you've completed the assignment.**

## Prerequisites

- Use Node 20.x or later.

## Local development

Install dependencies

```bash
npm install
```

Run the app locally with hot reload and type checking

```bash
npm run dev
```

Run Storybook with hot reload

```bash
npm run storybook
```

Run Storybook tests

```bash
npm run test:storybook
````

## Assignment

You're given a simple Vue 3 app skeleton, you need to implement the Sign-Up page according to [this Figma design](<https://www.figma.com/file/g79md7DSOve3ahnA7SmiTf/Sign-Up-Form-(Community)?type=design&node-id=3%3A2&mode=dev&t=mSlJXMEFPuXDEGBB-1>).

The backend in our hypothetical app is implemented by the backend team, and we don't touch the communication layer in this assignment.
So, instead of sending the data to the backend, you can just log it to the console.

Don't worry about different screen sizes, just implement the desktop version of the page.

You don't need to implement the Sign-In page. It only exists to provide a route referenced on the Sign-Up page.

### Tasks

- Implement the missing BaseInput component.
- Write [Storybook stories](https://storybook.js.org/docs/get-started/vue3-vite) for the BaseInput component.
- Write a [Storybook interactions test](https://storybook.js.org/docs/essentials/interactions) for the BaseInput component.
- Implement the Sign-Up page according to the given design. The behavior is not described in details, so implement all the functionality that you find necessary for such a page on the client side.

## Third-party libraries

You may use any third-party libraries you see fit.
Also, you may change the app setup for your convenience. For example, enhance vite config, add linting, etc.

## Assessment criteria

- The app is compiling and running without errors.
- The test suite is passing.
- The Storybook stories are implemented and running without errors.
- The app is implemented according to the design (fonts, sizes, colors, etc.)
- Functionality of the component and Sign-Up page
- Typescript best practices
- Good test design (all the cases are covered, no redundant tests)
- Good stories design (all the useful cases are shown, no redundant stories)
- General code cleanliness (good naming conventions, well organized etc.)
- Show work through commit history

## Submission

After you've completed the assignment, please push your code and send us a link to your repository.
We will review your code and get back to you with feedback.
