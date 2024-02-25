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
