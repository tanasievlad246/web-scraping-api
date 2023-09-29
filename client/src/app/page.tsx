import { UrlInput } from "@/components/urlInput"

export default function Home() {
  return (
   <div className="grid grid-cols-1 grid-rows-6 w-full h-full">
      <div className="row-span-1 self-center place-self-center">
        <UrlInput />
      </div>
      <div className="row-span-5 self-start place-self-center">
        <h1>Data grid</h1>
      </div>
   </div>
  )
}
