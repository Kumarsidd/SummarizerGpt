import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidSummarizer : string = process.env.NEXT_PUBLIC_RAPID_SUMMARIZER!;

interface Summary{
    summary : string
}

interface Model{
    model : string
}

export const summarizerApi = createApi({
    reducerPath : 'articleApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders : (headers) => {
            headers.set('X-RapidAPI-Key', rapidSummarizer);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints : (builder) => ({
        getSummary : builder.query <Summary, {articleUrl : string}>({ 
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
           
            query : (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        }),
    }),
})

export const { useLazyGetSummaryQuery } = summarizerApi;

export const imageApi = createApi({
  reducerPath: 'generateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openai80.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidSummarizer);
      headers.set('X-RapidAPI-Host', 'openai80.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getImage: builder.query<Model, { imageUrl: string }>({
      query: (params) => ({ url: `images/generations`, method: 'POST', body: { prompt: params.imageUrl, n: 2, size: '1024x1024' } }),
    }),
  }),
});

export const { useLazyGetImageQuery } = imageApi;
