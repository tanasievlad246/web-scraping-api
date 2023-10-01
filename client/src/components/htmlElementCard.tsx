interface HtmlElementCardProps {
    tagName: string;
    attributes: string[];
    textContent: string;
}

export const HtmlElementCard = ({ tagName, attributes, textContent }: HtmlElementCardProps) => {
    return <>
        <div className="grid grid-cols-1 grid-rows-4">

        </div>
    </>
}