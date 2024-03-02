import { SheetData } from "@/libs/gsheets";
import React from "react";
import Image from "next/image";
import GroveStreetLogo from "@/public/grove-street-logo.svg";
import LikeIcon from "@/public/like-filled.svg";
import FacebookIcon from "@/public/fe_facebook.svg";

type Props = {
  posts: SheetData[];
};

const FacebookCard = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-1 border-black gap-[1px] bg-black">
      {posts.map((post, i) => (
        <div key={i} className="bg-white flex flex-col h-full">
          <a
            href={post.postLink}
            target="_blank"
            className="relative w-full h-[170px] fbPost"
          >
            <img
              src={post.postMediaContent}
              alt={post.content}
              width={300}
              height={170}
              className="absolute top-0 left-0 object-cover w-full h-[170px]"
            />
          </a>
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src={GroveStreetLogo.src}
                    height={18}
                    width={18}
                    alt="GroveStreetLogo"
                  />
                </div>
                <div>
                  <p className="text-black text-sm font-medium hidden md:block">
                    Grove Street Ballerz
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <p className="text-black text-sm font-medium">
                  {post.reactions}
                </p>
                <Image
                  src={LikeIcon.src}
                  height={18}
                  width={18}
                  alt="Like icon"
                  className="pb-[2px]"
                />
              </div>
            </div>
            <div className="pb-5">
              <p className="text-[#757575]">
                {post.content.split(" ").length > 20
                  ? post.content.split(" ").slice(0, 20).join(" ") + "..."
                  : post.content}
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <a
                href={"https://www.facebook.com/GSBallerz"}
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image
                  src={FacebookIcon.src}
                  height={24}
                  width={24}
                  alt="Facebook icon"
                />
                <p className="text-black text-sm hidden md:block font-medium">
                  @GSBallerz
                </p>
              </a>
              <div>
                <a
                  href={post.postLink}
                  target="_blank"
                  className="underline text-black text-sm"
                >
                  Zobacz Post
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacebookCard;
