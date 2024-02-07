import { getGoogleSheetsData } from "@/libs/gsheets";
import FacebookCard from "./facebookCard";

const FacebookPosts = async () => {
  const range = `Fb Posts!A:G`;
  const posts = await getGoogleSheetsData(range);

  if (!posts) return null;

  return (
    <section className="pt-[100px] lg:pt-[140px] pb-10">
      <div className="max-w-app">
        <div className="mb-12">
          <p className="text-white text-md sm:text-xl md:text-3xl font-extrabold mb-7">
            #GROVESTREETBASKETBALL
          </p>
        </div>

        <FacebookCard posts={posts} />
      </div>
    </section>
  );
};

export default FacebookPosts;
