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

export interface Article {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsData {
    articles: Article[];
}

export interface SourcesData {
    sources: Source[];
}

export interface LoaderOptions {
    [key: string]: string | number;
}

export interface GetRespParams {
    endpoint: string;
    options?: LoaderOptions;
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}
