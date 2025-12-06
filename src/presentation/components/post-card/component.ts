import type { Post } from '@domain/posts';
import './style.css';
import { formatDate } from '@lib/utils';

export class PostCard {
	props: Post;
	constructor(props: Post) {
		this.props = props;
	}

	render() {
		return `
      <a is="spa-link" href="/posts/${this.props.id}" class="post-link">
        <article class="post-card">
          <header class="post-card-header">
            <h2 class="post-title">${this.props.title}</h2>
          </header>

          <div class="post-card-content">
            <div class="post-meta">
              <div class="date-info">
                <div class="date-item">
                  <CalendarIcon />
                  <span class="date-label">Создан:</span>
                  <time datetime="${new Date(this.props.createdAt).toISOString()}" class="date-value">
                    ${formatDate(this.props.createdAt)}
                  </time>
                </div>

                <div class="date-item">
                  <EditIcon />
                  <span class="date-label">Изменён:</span>
                  <time datetime="${new Date(this.props.updatedAt).toISOString()}" class="date-value">
                    ${formatDate(this.props.updatedAt)}
                  </time>
                </div>
              </div>
            </div>
          </div>

          <div class="post-card-footer">
            <span class="read-more">Читать →</span>
          </div>
        </article>
      </a>
    `;
	}
}
