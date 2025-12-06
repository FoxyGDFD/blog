import type { IPostRepository } from '@domain/posts';
import './style.css';
import { CreatePostButton } from '@presentation/components/buttons/create-post';
import { PostCard } from '@presentation/components/post-card/component';
import { Component } from '@lib/component';

export class MainPage extends Component {
	postRepository: IPostRepository;
	constructor(postRepository: IPostRepository) {
		super();
		this.postRepository = postRepository;
	}

	render() {
		const posts = this.postRepository.posts();
		let content = `
      <header class="blog-header">
        <h1>Блог</h1>
        ${new CreatePostButton().render()}
      </header>
    `;
		if (!posts.length)
			content += `
      <div class="empty-state">
        <svg
          class="empty-state-icon"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        <h2>Пока нет ни одного поста</h2>
        <p>Создайте первую запись, чтобы начать вести блог</p>
        ${new CreatePostButton().render()}
      </div>`;
		else {
			content += '<div class="posts-list">';
			posts.forEach((post) => (content += new PostCard(post).render()));
			content += '</div>';
		}

		const template = document.createElement('template');
		template.innerHTML = content;

		return template.content;
	}
}
