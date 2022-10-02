import Image from 'next/image';

export default function Card(props: any) {
  return (
    <div>
      <div className="max-w-sm rounded-lg bg-dracula-darker-700 shadow-md">
        <div className="p-2">
          <Image
            height={270}
            width={480}
            className="rounded-lg"
            src={props.urlhd}
            alt=""
          />
          <div className="p-2">
            <h2 className="mb-2 text-xl font-bold">{props.name}</h2>
            <div className="flex gap-2">
              <a
                href={props.urlhd}
                className="inline-flex items-center py-2 px-3 text-sm font-bold text-center rounded-lg bg-dracula-purple-500 hover:bg-dracula-purple-600">
                Download HD
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
              <a
                href={props.url4k}
                className="inline-flex items-center py-2 px-3 text-sm font-bold text-center rounded-lg bg-dracula-purple-500 hover:bg-dracula-purple-600">
                Download 4k
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
