import { FiSearch } from "react-icons/fi"

export const UrlInput = () => {
    return <>
        <div className="relative">
          <FiSearch className="absolute text-light-gray w-8 h-8 top-1 inset-y-0 left-0 flex items-center pl-2 hover:text-gray-400 cursor-pointer"/>
        </div>
        <input type="text" className="w-96 h-10 py-2 pl-10 rounded-full bg-dark-input outline-gray-400 text-gray-400" placeholder='Link to scrape'/>
    </>
}