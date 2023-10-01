import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import { HtmlTagSelect } from './htmlTagSelect'
import { IHtmlTag } from "./htmlTagSelect"

export const UrlInput = ({ searchFunction, showOptional = true }: { searchFunction: (targetUrl: string, optionalElements: IHtmlTag[], extractAllText: boolean) => void, showOptional?: boolean }) => {
    const [url, setUrl] = useState("");
    const [selectedHtmlTags, setSelectedHtmlTags] = useState<IHtmlTag[]>([]);
    const [extractAllTextFlag, setExtractAllTextFlag] = useState(false);

    return <>
        <div className="relative">
          <FiSearch
            onClick={() => searchFunction(url, selectedHtmlTags, extractAllTextFlag)}
            className="absolute text-light-gray w-8 h-8 top-1 inset-y-0 left-0 flex items-center pl-2 hover:text-gray-400 cursor-pointer"/>
        </div>
        <div className="flex flex-col">
          <input
            onKeyUp={(e)=> {
              if (e.code === 'Enter') {
                searchFunction(url, selectedHtmlTags, extractAllTextFlag)
              }
            }}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            className="w-96 h-10 py-2 pl-10 rounded-full bg-dark-input outline-gray-400 text-gray-400"
            placeholder='Link to scrape'
          />
          { showOptional ? <><div className="flex flex-row justify-between align-middle mt-2">
            <div className="flex flex-row justify-center items-center">
              <label className="pr-2">Extract all text from page</label>
              <input
                type="checkbox"
                onChange={e => {
                  console.log(e.target.checked);
                  setExtractAllTextFlag(e.target.checked);
                }}
                className="form-checkbox h-5 w-5 text-spotify-green-500 focus:ring-spotify-green-500 border-gray-300 rounded-md checked:bg-spotify-green-500 checked:border-transparent"
              />
            </div>
          </div>
          <div className="my-2">
            <HtmlTagSelect selectedHtmlTags={selectedHtmlTags} setSelectedHtmlTags={setSelectedHtmlTags}/>
          </div></> : ''}
        </div>
    </>
}