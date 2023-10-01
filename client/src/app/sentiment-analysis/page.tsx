"use client";

import { UrlInput } from "@/components/urlInput";
import axios from "axios";
import { useState } from "react";
import ReactJson from "react-json-view";

export default function WordCount() {
    const [scrapedPageData, setScrapedPageData] = useState([]);

    const handleUrlInput = async (targetUrl: string) => {
        try {
            const result = await axios.post('http://localhost:5000/api/v1/sentiment-analysis', {
                targetUrl
            });
            console.log(result);
            setScrapedPageData(result.data);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="grid grid-cols-1 grid-rows-6 w-full h-full">
            <h1 className="text-white self-center place-self-center">Sentiment Analysis</h1>
            <div className="row-span-1 self-center place-self-center">
                <UrlInput searchFunction={handleUrlInput} showOptional={false}/>
            </div>
            <div className="row-span-5 self-start place-self-center">
                <ReactJson theme="apathy:inverted" src={scrapedPageData} />
            </div>
        </div>
    )
}