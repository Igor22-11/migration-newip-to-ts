import './news.css';
import { NewsItem } from '../../types/index';
const placeholderIMG = require('../../../img/news_placeholder.jpg');

class News {
    draw(data: NewsItem[]): void {
        const news = data.length >= 10 ? data.slice(0, 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) {
            throw new Error('Template element #newsItemTemp not found');
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            const newsItem = newsClone.querySelector('.news__item');
            if (newsItem && idx % 2) newsItem.classList.add('alt');

            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || placeholderIMG})`;

            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            newsMetaAuthor.textContent = item.author || item.source.name;

            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            newsDescriptionTitle.textContent = item.title;

            const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            newsDescriptionSource.textContent = item.source.name;

            const newsDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            newsDescriptionContent.textContent = item.description;

            const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;
            newsReadMore.href = item.url;

            fragment.appendChild(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (!newsContainer) {
            throw new Error('News container not found');
        }

        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
