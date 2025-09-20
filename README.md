# ✨ Tip Calculator (Frontend Mentor)

![Tip calculator preview](./design/preview.jpg)

## 📖 Description

Tip calculator app developed with React, TypeScript, and Styled Components. Even though it's marked as a "junior" project at Frontend Mentor, I had a lot of challenges on how to present the errors and total results in a intuitive way.

Whenever the user types, the calculated values (on the right) will be updated only if all necessary values are provided. If the user provides an invalid value or leaves any input field empty, an error will appear next to the corresponding label.

I tried to be as accurate to the design as possible using only the images provided.

## 📦 Install and usage

1. Clone this repo:

```bash
git clone https://github.com/GracilianoOG/fem-tip-calculator.git
```

2. Enter the directory:

```bash
cd fem-tip-calculator/
```

3. Init Visual Studio Code (or any other IDE):

```bash
code .
```

4. Install the dependencies:

```bash
npm install
```

5. Run the project:

```bash
npm start
```

## 📜 Available scripts

| Script  | Command                | Description                                  |
| ------- | ---------------------- | -------------------------------------------- |
| dev     | `vite`                 | Runs the development server.                 |
| build   | `tsc -b && vite build` | Builds the project, including type checking. |
| lint    | `eslint .`             | Lints the codebase for issues.               |
| preview | `vite preview`         | Previews the production build locally.       |

## 🗂️ Project structure

```
📁 src/          -> Source code.
  📁 assets/     -> Project images and other resources.
  📁 components/ -> Main components.
  📁 layouts/    -> Container components (header, main, etc).
  📁 contexts/   -> React contexts.
  📁 hooks/      -> Reusable hooks.
  📁 providers/  -> Context providers.
  📁 styles/     -> Global styles.
  📁 utils/      -> General utility properties.
  📄 App.tsx     -> Main app component.
  📄 main.tsx    -> App entry point.
```

## 🛠️ Developed with

[![Ferramentas](https://skillicons.dev/icons?i=react,ts,styledcomponents,vite,nodejs,npm,vscode)](https://skillicons.dev)

- Website developed with **React**.
- I used **TypeScript** to prevent issues related to typing.
- Styles were created using the **Styled Components** library to enable writing CSS within TypeScript.
- The project uses **Vite** to accelerate the development and build processes.

## 🔗 Links

- [Frontend Mentor](https://www.frontendmentor.io/)
- [You don’t need a fancy library when you have HTML5 and Constraint API.](https://hackernoon.com/implement-form-validation-in-react-without-any-libraries)
- [Validating User Input in React: Enhancing Form Interactivity](https://www.reacttutorial.com/validating-user-input-in-react)
- [Intl.NumberFormat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [useRef](https://react.dev/reference/react/useRef#manipulating-the-dom-with-a-ref)
- [Handling Monetary Values in JavaScript: In-Depth Guide](https://expertbeacon.com/handling-monetary-values-in-javascript-in-depth-guide/)
- [How to use React useRef with TypeScript](https://linguinecode.com/post/how-to-use-react-useref-with-typescript)
- [Making Disabled Buttons More Inclusive](https://css-tricks.com/making-disabled-buttons-more-inclusive/)

## 🧑🏻‍💻 Author

| [<img src="https://avatars.githubusercontent.com/u/72778164?s=96&v=4"><br><sub>GracilianoOG</sub>](https://github.com/GracilianoOG) |
| :---------------------------------------------------------------------------------------------------------------------------------: |
|                                       [Linkedin](https://www.linkedin.com/in/gabrielgmbarros)                                       |
