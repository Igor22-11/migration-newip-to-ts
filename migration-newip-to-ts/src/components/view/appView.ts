import News from './news/news';
import Sources from './sources/sources';
import { NewsData } from '../types/index';
import { SourcesData } from '../types/index';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData) {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData) {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
