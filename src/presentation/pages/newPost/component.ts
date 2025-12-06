import { Component } from '@lib/component';
import { CreatePostButton } from '@presentation/components/buttons/create-post';

export class NewPostPage extends Component {
	constructor() {
		super();
	}

	render() {
		const template = document.createElement('template');

		template.innerHTML = `
      <header class="blog-header">
        <h1>Блог</h1>
        ${new CreatePostButton().render()}
      </header>
    `;
		return template.content;
	}
}
