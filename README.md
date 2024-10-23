# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)

# vite-react-docker

Demo repo showing how to Dockerize a Vite React app and run as a static website using NGINX.

To read an article about this repo see [here](https://medium.com/@mattburrellnet/running-a-react-vite-app-in-docker-using-nginx-414ff9a302c5).

## Dependencies

Make sure you have the following installed:

- [Node](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-docker/)

The React app was bootstrapped using [Vite](https://vitejs.dev/).

## Installation and running locally

```sh
npm run install
npm run dev
```

## Building and running in Docker

```sh
docker build -t vite-app .
docker run -p 80:80 vite-app
```
