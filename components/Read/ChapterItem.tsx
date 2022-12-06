import Link from "next/link";
import React from "react";

import { SelectChap } from "../../Interface/Interface";

interface ItemChapter {
  chapter: SelectChap;
  nextLinks: any;
}

const ChapterItem: React.FC<ItemChapter> = ({ chapter, nextLinks }) => {
  console.log(chapter, nextLinks);
  return (
    <>
      <Link href={`/read/${chapter.chap}/${chapter.nextChap}`}>
        <div className="flex flex-col px-3">
          <div
            className={`${
              nextLinks === chapter.nextChap
                ? "bg-red-400 text-white rounded-lg "
                : "bg-white border-2 rounded-lg  border-slate-300 text-black"
            } m-3  `}
          >
            <p className="text-center my-auto py-2 cursor-pointer">
              {chapter.title}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ChapterItem;
