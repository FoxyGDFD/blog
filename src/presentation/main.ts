import './layout.css';
import './app.css';
import { MainPage } from './pages/main/page';
import { SpaLink } from '@lib/routing';
import { postRepository } from '@controllers/posts';
import { routerProvider } from '@lib/routing/router-privider';
import { NewPostPage } from './pages/newPost/component';

let routes = [
	{
		path: '/',
		component: new MainPage(postRepository)
	},
	{
		path: '/posts/new',
		component: new NewPostPage()
	}
	// {
	// 	path: '/posts/:id',
	// 	component: ViewPost,
	// 	layout: Layout
	// },
	// {
	// 	path: '/posts/:id/edit',
	// 	component: EditPost,
	// 	layout: Layout
	// }
];

customElements.define('spa-link', SpaLink, { extends: 'a' });

document.getElementById('app')!.innerHTML = `
  <div class="app">
    <main id="main" class="container">
    </main>
  </div>
`;

const container = document.getElementById('main')!;

routerProvider(container, routes);
