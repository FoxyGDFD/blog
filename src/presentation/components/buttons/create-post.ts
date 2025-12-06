export class CreatePostButton {
	render() {
		return `
      <a is="spa-link" href="/posts/new" class="button button-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.5" />
          <path
            d="M12 7.5V16.5M7.5 12H16.5"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
        Создать пост
      </a>
    `;
	}
}
