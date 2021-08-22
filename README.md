# Blog Project Frontend

A **React** **TypeScript** frontend for a blog project using custom blog [API](https://github.com/Tynasello/blog-api).

## Overview

[Live Demo](https://tynasello.github.io/blog-frontend/)

I previosuly built a REST API for creating custom blogs. This project is an example frontend that shows how the API can be utilized.

Any veiwer can observe posts and create comments. Users who log in with correct admin username and password are granted additional privileges.

To be admin of this blog, login with username: "**admin**" and password: "**adminpass**". This will allow you the ability to create, edit, and delete blog posts, aswell as delete post comments.

## src Folder Structure

```
./src
├── App.tsx
├── Routes.tsx
├── components
|  ├── Admin
|  |  ├── Post.tsx
|  |  └── PostPreview.tsx
|  ├── Nav.tsx
|  ├── Public
|  |  ├── Post.tsx
|  |  └── PostPreview.tsx
|  └── Utils
|     ├── Button.tsx
|     ├── Form.tsx
|     ├── Input.tsx
|     ├── Modal.tsx
|     ├── ModalContainer.tsx
|     └── TextInput.tsx
├── index.tsx
├── pages
|  ├── Admin
|  |  └── Posts.tsx
|  ├── Login.tsx
|  └── Public
|     └── Posts.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
└── theme
   ├── GlobalStyle.ts
   └── Theme.ts
```

## What I've Learned

> How to use **Typescript** with **React**:
>
> - Declaring components and working with interfaces and props.
> - Using react hooks such as useEffect and useState.
>
> How to serve a backend:
>
> - Making asynchronous API requests.
> - Sending data to an API via request body.
> - Recieving data from an API via repsonse body.
> - Sending custom HTTP headers to API ('x-access-token' for user auth).
>
> How to create a multi-page app with React using pages.
> How to leverage React routes with HashRouter for gh-pages deployment.

## Installation

To Work on this project:

Clone project:

```bash
git clone https://github.com/Tynasello/blog-frontend
```

Change into project directory:

```bash
cd blog-frontend
```

Install required dependencies:

```bash
npm install
```

To run the app in the development mode:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

To build the app for production to the build folder:

```bash
npm run build
```

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [gh-pages](https://pages.github.com/)

## Acknowledgments

Inspiration for this project was found while following the tutorials on [The Odin Project](https://www.theodinproject.com), and advancing to the [NodeJS Project: Blog API](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/blog-api) section.
