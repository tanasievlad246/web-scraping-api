import { Dispatch, SetStateAction, useState } from 'react';
import { Listbox } from '@headlessui/react';

const htmlTags = [
  { id: 1, name: 'a' },
  { id: 2, name: 'abbr' },
  { id: 3, name: 'address' },
  { id: 4, name: 'area' },
  { id: 5, name: 'article' },
  { id: 6, name: 'aside' },
  { id: 7, name: 'audio' },
  { id: 8, name: 'b' },
  { id: 9, name: 'base' },
  { id: 10, name: 'bdi' },
  { id: 11, name: 'bdo' },
  { id: 12, name: 'blockquote' },
  { id: 13, name: 'body' },
  { id: 14, name: 'br' },
  { id: 15, name: 'button' },
  { id: 16, name: 'canvas' },
  { id: 17, name: 'caption' },
  { id: 18, name: 'cite' },
  { id: 19, name: 'code' },
  { id: 20, name: 'col' },
  { id: 21, name: 'colgroup' },
  { id: 22, name: 'data' },
  { id: 23, name: 'datalist' },
  { id: 24, name: 'dd' },
  { id: 25, name: 'del' },
  { id: 26, name: 'details' },
  { id: 27, name: 'dfn' },
  { id: 28, name: 'dialog' },
  { id: 29, name: 'div' },
  { id: 30, name: 'dl' },
  { id: 31, name: 'dt' },
  { id: 32, name: 'em' },
  { id: 33, name: 'embed' },
  { id: 34, name: 'fieldset' },
  { id: 35, name: 'figcaption' },
  { id: 36, name: 'figure' },
  { id: 37, name: 'footer' },
  { id: 38, name: 'form' },
  { id: 39, name: 'h1' },
  { id: 40, name: 'h2' },
  { id: 41, name: 'h3' },
  { id: 42, name: 'h4' },
  { id: 43, name: 'h5' },
  { id: 44, name: 'h6' },
  { id: 45, name: 'head' },
  { id: 46, name: 'header' },
  { id: 47, name: 'hr' },
  { id: 48, name: 'html' },
  { id: 49, name: 'i' },
  { id: 50, name: 'iframe' },
  { id: 51, name: 'img' },
  { id: 52, name: 'input' },
  { id: 53, name: 'ins' },
  { id: 54, name: 'kbd' },
  { id: 55, name: 'label' },
  { id: 56, name: 'legend' },
  { id: 57, name: 'li' },
  { id: 58, name: 'link' },
  { id: 59, name: 'main' },
  { id: 60, name: 'map' },
  { id: 61, name: 'mark' },
  { id: 62, name: 'meta' },
  { id: 63, name: 'meter' },
  { id: 64, name: 'nav' },
  { id: 65, name: 'noscript' },
  { id: 66, name: 'object' },
  { id: 67, name: 'ol' },
  { id: 68, name: 'optgroup' },
  { id: 69, name: 'option' },
  { id: 70, name: 'output' },
  { id: 71, name: 'p' },
  { id: 72, name: 'param' },
  { id: 73, name: 'picture' },
  { id: 74, name: 'pre' },
  { id: 75, name: 'progress' },
  { id: 76, name: 'q' },
  { id: 77, name: 'rp' },
  { id: 78, name: 'rt' },
  { id: 79, name: 'ruby' },
  { id: 80, name: 's' },
  { id: 81, name: 'samp' },
  { id: 82, name: 'script' },
  { id: 83, name: 'section' },
  { id: 84, name: 'select' },
  { id: 85, name: 'slot' },
  { id: 86, name: 'small' },
  { id: 87, name: 'source' },
  { id: 88, name: 'span' },
  { id: 89, name: 'strong' },
  { id: 90, name: 'style' },
  { id: 91, name: 'sub' },
  { id: 92, name: 'summary' },
  { id: 93, name: 'sup' },
  { id: 94, name: 'table' },
  { id: 95, name: 'tbody' },
  { id: 96, name: 'td' },
  { id: 97, name: 'template' },
  { id: 98, name: 'textarea' },
  { id: 99, name: 'tfoot' },
  { id: 100, name: 'th' },
  { id: 101, name: 'thead' },
  { id: 102, name: 'time' },
  { id: 103, name: 'title' },
  { id: 104, name: 'tr' },
  { id: 105, name: 'track' },
  { id: 106, name: 'u' },
  { id: 107, name: 'ul' },
  { id: 108, name: 'var' },
  { id: 109, name: 'video' },
  { id: 110, name: 'wbr' },
];

export interface IHtmlTag {
  id: number,
  name: string
}

interface HtmlTagSelectComponent {
  selectedHtmlTags: IHtmlTag[],
  setSelectedHtmlTags: Dispatch<SetStateAction<IHtmlTag[]>>
}

export function HtmlTagSelect({ selectedHtmlTags, setSelectedHtmlTags }: HtmlTagSelectComponent) {

  return (
    <Listbox
      value={selectedHtmlTags}
      onChange={setSelectedHtmlTags}
      multiple
    >
      <Listbox.Button
        placeholder='Selet optional html tags to scrape'
        className="w-full h-9 px-4 py-2 bg-spotify-green-500 text-white rounded-lg focus:ring-2 focus:ring-spotify-green-500">
        {selectedHtmlTags.length > 0 ? selectedHtmlTags.map((tag) => tag.name).join(', ') : 'Select optional html tags to scrape'}
      </Listbox.Button>
      <Listbox.Options className="absolute z-10 mt-2 py-1 h-64 w-64 bg-black text-white bg-spotify-green-500 text-white rounded-lg shadow-lg overflow-auto">
        {htmlTags.map((tag) => (
          <Listbox.Option key={tag.id} value={tag}>
            {({ active, selected }) => (
              <li
                className={`${
                  active ? 'bg-spotify-gray-300' : ''
                } ${selected ? 'text-white' : 'text-black-900'}
                cursor-pointer select-none relative px-10 py-2`}
              >
                {tag.name}
                {selected && (
                  <span
                    className={`${
                      active ? 'text-black-900' : ''
                    } absolute inset-y-0 left-0 flex items-center pl-4`}
                  >
                    ✓
                  </span>
                )}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
