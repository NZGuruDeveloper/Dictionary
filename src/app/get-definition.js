"use client";
import useSWR from "swr";
import PlaySound from "./playSound";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
/**
 * Renders a definition component that displays the meaning of a word.
 *
 * @param {object} props - The props object containing the search term.
 * @return {JSX.Element} The JSX element representing the definition component.
 */
export default function Definition(props) {
  const { data, error } = useSWR(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + (props.search ? props.search : "keyboard"),
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (!data[0]) return <div>Loading...</div>;

  return (
    <div>
      {console.log(data)}
      
      {/* Word and sound play */}
      <div className="flex justify-between">
        <h1 className="font-bold text-5xl">{data[0].word}</h1>
        <div className="flex justify-end">
          <PlaySound soundUrl={data[0].phonetics[0].audio} />
        </div>
      </div>

      {/* Phonetics */}
      <h4 className="text-lg text-[#A445ED]">{data[0].phonetics[0].text}</h4>
      <div className="relative flex py-5 items-center">
        <span className="flex-shrink">
          {" "}
          <h2 className="text-lg font-bold mb-3 mt-3 mr-4">
            {data[0].meanings[0].partOfSpeech
              ? data[0].meanings[0].partOfSpeech
              : " "}
          </h2>
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Meanings */}
      <h3 className="text-gray-400 mb-3">
        {data[0].meanings[0] ? "Meaning" : ""}
      </h3>
      {/* Nouns */}
      <ul className="list-disc list-outside ml-8">
        {data[0].meanings[0].definitions.map((definition) => (
          <li className="mb-3" key={definition.definition}>
            {definition.definition}
          </li>
        ))}
      </ul>

      <div className="text-gray-400 mb-3">
        {data[0].meanings[0].synonyms[0] ? (
          <span className="">Synonyms </span>
        ) : (
          ""
        )}
        {data[0].meanings[0].synonyms[0] ? (
          <span className="text-[#A445ED]">
            {data[0].meanings[0].synonyms[0]}
          </span>
        ) : (
          ""
        )}
      </div>

      {/* Meanings */}
      <div className="relative flex py-5 items-center">
        <span className="flex-shrink">
          {" "}
          <h2 className="text-lg font-bold mb-3 mt-3 mr-4">
            {data[0].meanings[1].partOfSpeech
              ? data[0].meanings[1].partOfSpeech
              : " "}
          </h2>
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <h3 className="text-gray-400 mb-3">
        {data[0].meanings[1] ? "Meaning" : ""}
      </h3>
      <ul className="list-disc list-outside ml-8">
        {data[0].meanings[1].definitions.map((definition) => (
          <li className="mb-3" key={definition.definition}>
            <div>{definition.definition}</div>
            <div className="text-gray-400">{definition.example}</div>
          </li>
        ))}
      </ul>
      <div className="flex-grow border-t border-gray-400 mt-8"></div>
      <h3 className="mt-2">
        Source{" "}
        <a
          className="underline visited:text-purple-600"
          href={data[0].sourceUrls[0]}
        >
          {data[0].sourceUrls[0]}
        </a>
      </h3>
    </div>
  );
}
