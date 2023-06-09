import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidSummarizer : string = process.env.NEXT_RAPID_SUMMARIZER!;

interface Summary{
    summary : string
}

export const summarizerApi = createApi({
    reducerPath : 'articleApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders : (headers) => {
            headers.set('X-RapidAPI-Key', "c2301b5fecmsh3c614c1b1cefaedp1c8d39jsn055603084898");
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