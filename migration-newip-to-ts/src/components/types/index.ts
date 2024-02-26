export interface INewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface INewsApiSourcesResponse {
    status: string;
    sources: INewsSource[];
}

export interface INewsApiRequestParams {
    apiKey: string;
    category?: string;
    language?: string;
    country?: string;
}

export interface Source {
    id: string;
    name: string;
}

export interface NewsItem {
    urlToImage?: string;
    author?: string;
    source: { name: string };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}
