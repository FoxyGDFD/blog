## Project

Simple blog site, posts sotes data in local storage.
This branch uses [SvelteKit](https://svelte.dev/docs/kit/introduction) router. All pages are created in the spa mode. If SvelteKit cannot be used in the project see `svelte/custom-router` branch.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
