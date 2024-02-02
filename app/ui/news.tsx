import Image from "next/image";
import article1_image from "@/public/Article_1.jpg";
import article2_image from "@/public/Article_2.jpg";
import article3_image from "@/public/Article_3.jpg";
import TimeIconSvg from "./timeIconSvg";
import Link from "next/link";

const News = () => {
  return (
    <section className="pt-[100px] lg:pt-[190px] pb-10">
      <div className="max-w-app">
        <div className="mb-12">
          <p className="text-white text-3xl font-extrabold mb-7">AKTUALNOŚCI</p>
          <span className="w-full max-w-[300px] h-[5px] bg-[#DC8A02] block"></span>
        </div>
        <div className="grid grid-cols-1 h-auto lg:h-[480] xl:grid-cols-[auto_1fr] text-left gap-7">
          <Link className="articleLink" href="/">
            <div className="relative">
              <div className="absolute z-20 top-0 pt-5 pl-5 md:pl-10">
                <div className="flex items-center justify-center gap-1 bg-black p-1 rounded-md">
                  <span>
                    <TimeIconSvg />
                  </span>
                  <span className="text-[12px]">17.01.2024</span>
                </div>
              </div>

              <div className="absolute z-20 bottom-0 pb-5 pl-5 md:pb-10 md:pl-10">
                <h3 className="text-white text-lg md:text-3xl font-extrabold">
                  Sukcesy Grove Street Ballers: Odkrywamy Twarze&nbsp;Mistrzów!
                </h3>
              </div>
              <div className="article_mainImage relative">
                <Image
                  src={article1_image.src}
                  alt="Article title"
                  width={775}
                  height={480}
                  className="w-full max-w-full articleImage"
                />
              </div>
            </div>
          </Link>

          <div className="flex gap-7 flex-col">
            <div className="grid grid-cols-[0.4fr_0.6fr] md:grid-cols-[auto_1fr] h-full">
              <Link href="/" className="articleLink h-full">
                <div className="article_secondImage relative h-full">
                  <Image
                    src={article2_image.src}
                    alt="Article title"
                    width={225}
                    height={225}
                    className="articleImage h-full object-cover"
                  />
                </div>
              </Link>
              <div className="bg-[#D9D9D9] w-full max-w-full flex items-start justify-start flex-col  p-5">
                <div className="flex items-center justify-center gap-1 bg-black p-1 rounded-md">
                  <span>
                    <TimeIconSvg />
                  </span>
                  <span className="text-[12px]">28.12.2023</span>
                </div>
                <div className="text-[#31404b]  mt-4 mb-4 font-bold text-sm sm:text-lg ">
                  Czasem spojrzenie mówi więcej niż setki słów
                </div>
                <div className="mt-auto">
                  <div className="bg-[#272727] px-4 py-2 font-bold rounded-md text-sm md:text-base">
                    <Link href="/">zobacz więcej</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[0.4fr_0.6fr] md:grid-cols-[auto_1fr] h-full">
              <Link href="/" className="articleLink h-full">
                <div className="article_secondImage relative h-full">
                  <Image
                    src={article3_image.src}
                    alt="Article title"
                    width={225}
                    height={225}
                    className="articleImage h-full object-cover"
                  />
                </div>
              </Link>
              <div className="bg-[#D9D9D9] w-full max-w-full flex items-start justify-start flex-col  p-5">
                <div className="flex items-center justify-center gap-1 bg-black p-1 rounded-md">
                  <span>
                    <TimeIconSvg />
                  </span>
                  <span className="text-[12px]">28.12.2023</span>
                </div>
                <div className="text-[#31404b]  mt-4 mb-4 font-bold text-sm sm:text-lg ">
                  Jesteśmy mistrzami IV ligi KNBA 🔥🔥🔥
                </div>
                <div className="mt-auto">
                  <div className="bg-[#272727] px-4 py-2 font-bold rounded-md text-sm md:text-base">
                    <Link href="/">zobacz więcej</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
