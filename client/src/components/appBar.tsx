import Link from "next/link";

const LinkButton = ({ href, children }: { children: string, href: string }) => {
    return <Link href={href} className="transition ease-in-out delay-150 font-medium hover:text-link-green">{children}</Link>
};

export const AppBar = () => {
    return (
        <nav className="w-full h-14 flex flex-row justify-between items-center p-5">
            <div>
                <h1 className="font-inter font-bold text-lg text-light-gray"><Link href="/">WebScraper</Link></h1>
            </div>
            <div>
                <ul className="grid grid-rows-1 grid-cols-2 gap-10">
                    <li><LinkButton href="/sentiment-analysis">Sentiment Analysis</LinkButton></li>
                    <li><LinkButton href="/word-count">Word Counter</LinkButton></li>
                </ul>
            </div>
        </nav>
    );
}