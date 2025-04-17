import React from 'react';

const HomeCard1 = () => {
  return (
    <article className="w-72 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300">
      <svg viewBox="0 0 24 24" fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-10 h-10 text-gray-300 bg-gray-600 rounded-full p-1">
        <path d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" />
      </svg>
      <p className="text-sm w-full text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
        interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
        est pulvinar aliquet. Nulla facilisi.
      </p>
    </article>
  );
}

export default HomeCard1;
