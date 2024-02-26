import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data: unknown) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: unknown) => void): void {
        let target: EventTarget | null = e.target;
        const newsContainer: HTMLElement = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target instanceof HTMLElement && target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                const currentSourceId = newsContainer.getAttribute('data-source');

                if (sourceId && currentSourceId !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target !== null) {
                target = (target as HTMLElement).parentNode;
            } else {
                return;
            }
        }
    }
}

export default AppController;
