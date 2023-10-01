"use client"
import { UrlInput } from "@/components/urlInput"
import { useState } from "react";
import axios from 'axios';
import ReactJson from 'react-json-view';
import { IHtmlTag } from "@/components/htmlTagSelect";

export default function Home() {
  const [scrapedPageData, setScrapedPageData] = useState([]);

  const handleUrlInput = async (targetUrl: string, optionalElements: IHtmlTag[], extractAllText: boolean) => {
    try {
      const result = await axios.post('http://localhost:5000/api/v1/page-content', {
        targetUrl,
        optionalElements: optionalElements.map(el => el.name),
        extractAllText
      });
      console.log(result);
      setScrapedPageData(result.data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
   <div className="grid grid-cols-1 grid-rows-6 w-full h-full">
      <h1 className="text-white self-center place-self-center">Scrape content of a web page</h1>
      <div className="row-span-1 self-center place-self-center">
        <UrlInput searchFunction={handleUrlInput}/>
      </div>
      <div className="row-span-5 self-start place-self-center">
        <ReactJson theme="apathy:inverted" src={scrapedPageData} />
      </div>
   </div>
  )
}
